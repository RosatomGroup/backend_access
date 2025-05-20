import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateRequestDto,
  RequestDto,
  ResourceDto,
  RoleDto,
  UpdateRequestStatusDto,
} from './request.dto';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRequestDto: CreateRequestDto): Promise<RequestDto> {
    try {
      // Проверка существования ресурса и роли
      const [resource, role] = await Promise.all([
        this.prisma.resource.findUnique({
          where: { id: createRequestDto.resource_id },
        }),
        this.prisma.role.findUnique({
          where: { id: createRequestDto.role_id },
          include: { access: true },
        }),
      ]);

      if (!resource || !role) {
        throw new NotFoundException(
          `Resource or Role not found (Resource ID: ${createRequestDto.resource_id}, Role ID: ${createRequestDto.role_id})`,
        );
      }

      // Создание заявки
      const createdRequest = await this.prisma.request.create({
        data: {
          name: createRequestDto.name,
          surname: createRequestDto.surname,
          middle_name: createRequestDto.middle_name || '',
          email: createRequestDto.email,
          request_type: createRequestDto.request_type,
          status: 'pending',
          create_date: new Date(),
          complete_date: new Date(0), // Дата-заглушка
          resource: { connect: { id: createRequestDto.resource_id } },
          role: { connect: { id: createRequestDto.role_id } },
          ...(createRequestDto.user_id && {
            user_request: {
              create: { user_id: createRequestDto.user_id },
            },
          }),
        },
        include: {
          resource: true,
          role: { include: { access: true } },
          user_request: { include: { user: true } },
        },
      });

      // Логирование действия
      if (createRequestDto.user_id) {
        await this.prisma.log.create({
          data: {
            account_id: createRequestDto.user_id,
            action: `Created request #${createdRequest.id}`,
            action_time: new Date(),
          },
        });
      }

      return this.mapToRequestDto(createdRequest);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(
        `Failed to create request: ${error.message}`,
      );
    }
  }

  async findAll(): Promise<RequestDto[]> {
    const requests = await this.prisma.request.findMany({
      include: {
        resource: true,
        role: { include: { access: true } },
        user_request: { include: { user: true } },
      },
      orderBy: { create_date: 'desc' },
    });
    return requests.map(this.mapToRequestDto);
  }

  async findOneById(id: number): Promise<RequestDto> {
    const request = await this.prisma.request.findUnique({
      where: { id },
      include: {
        resource: true,
        role: { include: { access: true } },
        user_request: { include: { user: true } },
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
      const updateData = {
        status: updateStatusDto.status,
        ...(updateStatusDto.status !== 'pending' && {
          complete_date: new Date(),
        }),
      };

      const updatedRequest = await this.prisma.request.update({
        where: { id },
        data: updateData,
        include: {
          resource: true,
          role: { include: { access: true } },
          user_request: { include: { user: true } },
        },
      });

      // Логирование изменения статуса
      if (updatedRequest.user_request.length > 0) {
        await this.prisma.log.create({
          data: {
            account_id: updatedRequest.user_request[0].user_id,
            action: `Updated request #${id} status to ${updateStatusDto.status}`,
            action_time: new Date(),
          },
        });
      }

      return this.mapToRequestDto(updatedRequest);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Request with ID ${id} not found`);
      }
      throw new InternalServerErrorException(
        `Failed to update request status: ${error.message}`,
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
      include: { access: true },
      orderBy: { name: 'asc' },
    });
    return roles.map((role) => ({
      id: role.id,
      name: role.name,
      description: role.description,
      access_level: role.access.level,
    }));
  }

  private mapToRequestDto(request: any): RequestDto {
    return {
      id: request.id,
      name: request.name,
      surname: request.surname,
      middle_name: request.middle_name || undefined,
      email: request.email,
      request_type: request.request_type,
      status: request.status,
      create_date: request.create_date,
      complete_date:
        request.complete_date?.getTime() > 0
          ? request.complete_date
          : undefined,
      resource_id: request.resource_id,
      role_id: request.role_id,
      resource_name: request.resource?.name || '',
      role_name: request.role?.name || '',
      resource_link: request.resource?.link || undefined,
      user_id: request.user_request?.[0]?.user_id,
    };
  }
}
