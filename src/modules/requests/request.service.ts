import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateRequestDto,
  RequestDto,
  RequestStatus,
  RequestType,
  ResourceDto,
  RoleDto,
  UpdateRequestStatusDto,
} from './request.dto';
import { Prisma } from '@prisma/client';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class RequestService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<RequestDto> {
    try {
      const [resource, role] = await Promise.all([
        this.prisma.resource.findUnique({
          where: { id: createRequestDto.resourceId },
        }),
        this.prisma.role.findUnique({
          where: { id: createRequestDto.roleId },
        }),
      ]);

      if (!resource || !role) {
        throw new NotFoundException(
          `Resource or Role not found (Resource ID: ${createRequestDto.resourceId}, Role ID: ${createRequestDto.roleId})`,
        );
      }

      const existingRequest = await this.prisma.request.findFirst({
        where: {
          email: createRequestDto.email,
          resourceId: createRequestDto.resourceId,
          roleId: createRequestDto.roleId,
          requestType: createRequestDto.requestType,
          status: {
            not: RequestStatus.REJECTED,
          },
        },
      });

      if (existingRequest) {
        const actionType =
          createRequestDto.requestType === RequestType.GRANT_ACCESS
            ? 'на выдачу доступа'
            : 'на отзыв доступа';
        throw new ConflictException(
          `Заявка ${actionType} для этого email, системы и роли уже существует (статус: ${existingRequest.status})`,
        );
      }

      const createdRequest = await this.prisma.request.create({
        data: {
          name: createRequestDto.name,
          surname: createRequestDto.surname,
          middleName: createRequestDto.middleName ?? '',
          email: createRequestDto.email,
          requestType: createRequestDto.requestType,
          status: RequestStatus.PENDING,
          createDate: new Date(),
          resource: { connect: { id: createRequestDto.resourceId } },
          role: { connect: { id: createRequestDto.roleId } },
          ...(createRequestDto.userId && {
            users: {
              connect: { id: createRequestDto.userId },
            },
          }),
        },
        include: {
          resource: true,
          role: true,
          users: true,
        },
      });
      if (createRequestDto.userId) {
        await this.notificationsService.create({
          userId: createRequestDto.userId,
          requestId: createdRequest.id,
          status: RequestStatus.PENDING,
        });
      }
      if (createRequestDto.userId) {
        await this.prisma.log.create({
          data: {
            accountId: createRequestDto.userId,
            action: 'REQUEST_CREATED',
            actionTime: new Date(),
          },
        });
      }

      return this.mapToRequestDto(createdRequest);
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof ConflictException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Failed to create request: ${error.message}`,
      );
    }
  }

  async findAll(currentUser: JwtPayload): Promise<RequestDto[]> {
    const whereCondition: Prisma.RequestWhereInput =
      currentUser.accessLevel === 'ADMIN'
        ? {}
        : { users: { some: { id: currentUser.userId } } };

    const requests = await this.prisma.request.findMany({
      where: whereCondition,
      include: {
        resource: true,
        role: true,
        users: true,
      },
      orderBy: { createDate: 'desc' },
    });

    return requests.map((request) => this.mapToRequestDto(request));
  }

  async findAccesses(userId?: number): Promise<RequestDto[]> {
    if (!userId) {
      throw new Error('User ID is required');
    }

    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { email: true },
      });

      const requests = await this.prisma.request.findMany({
        where: {
          users: {
            some: {
              id: userId,
              email: user.email,
            },
          },
          status: 'APPROVED',
        },
        include: {
          resource: true,
          role: true,
          users: true,
        },
        orderBy: { createDate: 'desc' },
      });

      return requests.map((request) => this.mapToRequestDto(request));
    } catch (error) {
      console.error('Error fetching user accesses:', error);
      throw new Error('Failed to fetch user accesses');
    }
  }

  async findOneById(id: number): Promise<RequestDto> {
    const request = await this.prisma.request.findUnique({
      where: { id },
      include: {
        resource: true,
        role: true,
        users: true,
      },
    });
    if (!request) {
      throw new NotFoundException(`Request with ID ${id} not found`);
    }
    return this.mapToRequestDto(request);
  }

  async updateStatus(
    id: number,
    updateStatusDto: UpdateRequestStatusDto,
  ): Promise<RequestDto> {
    try {
      const existingRequest = await this.prisma.request.findUnique({
        where: { id },
        include: {
          resource: true,
          role: true,
          users: true,
        },
      });
      if (!existingRequest) {
        throw new NotFoundException(`Request with id ${id} not found`);
      }

      const updatedRequest = await this.prisma.request.update({
        where: { id },
        data: {
          status: updateStatusDto.status,
        },
        include: {
          resource: true,
          role: true,
          users: true,
        },
      });

      const user = await this.prisma.user.findUnique({
        where: { email: updatedRequest.email },
        select: { id: true },
      });
      const userId = user?.id;

      if (userId) {
        await this.notificationsService.create({
          userId: userId,
          requestId: id,
          status: updateStatusDto.status,
        });
      }

      if (updatedRequest.users.length > 0) {
        try {
          await this.prisma.log.create({
            data: {
              accountId: updatedRequest.users[0].id,
              action: 'REQUEST_STATUS_UPDATED',
              actionTime: new Date(),
            },
          });
        } catch (logError) {
          console.error('Ошибка при создании лога:', logError);
        }
      }

      return this.mapToRequestDto(updatedRequest);
    } catch (error) {
      console.error('Ошибка при обновлении статуса заявки:', error);
      throw new InternalServerErrorException(
        'Ошибка при обновлении статуса заявки',
      );
    }
  }

  async findAllResources(): Promise<ResourceDto[]> {
    const resources = await this.prisma.resource.findMany({
      orderBy: { name: 'asc' },
    });
    return resources.map((resource) => ({
      id: resource.id,
      name: resource.name,
      description: resource.description,
      link: resource.link || undefined,
    }));
  }

  async findAllRoles(): Promise<RoleDto[]> {
    const roles = await this.prisma.role.findMany({
      orderBy: { name: 'asc' },
    });
    return roles.map((role) => ({
      id: role.id,
      name: role.name,
      description: role.description,
      resourceId: role.resourceId,
    }));
  }

  private mapToRequestDto(
    request: Prisma.RequestGetPayload<{
      include: {
        resource: true;
        role: true;
        users: true;
      };
    }>,
  ): RequestDto {
    return {
      id: request.id,
      name: request.name,
      surname: request.surname,
      middleName: request.middleName,
      email: request.email,
      requestType: request.requestType,
      status: request.status,
      createDate: request.createDate,
      resourceId: request.resourceId,
      roleId: request.roleId,
      resourceName: request.resource?.name || '',
      roleName: request.role?.name || '',
      resourceLink: request.resource?.link || undefined,
      userId: request.users?.[0]?.id,
    };
  }

  async getStatus(id: number): Promise<RequestDto> {
    const request = await this.prisma.request.findUnique({
      where: { id },
      include: {
        resource: true,
        role: true,
        users: true,
      },
    });

    if (!request) {
      throw new NotFoundException(`Request with id ${id} not found`);
    }

    return this.mapToRequestDto(request);
  }

  async getUserIdByEmail(email: string): Promise<number | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });
    return user?.id ?? null;
  }
}
