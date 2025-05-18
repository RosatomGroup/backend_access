import { Injectable, NotFoundException } from '@nestjs/common';
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
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRequestDto: CreateRequestDto): Promise<RequestDto> {
    try {
      const existingResource = await this.prismaService.resource.findUnique({
        where: { id: createRequestDto.resource_id },
      });
      if (!existingResource) {
        throw new NotFoundException(
          `Resource with ID ${createRequestDto.resource_id} not found`,
        );
      }

      const existingRole = await this.prismaService.role.findUnique({
        where: { id: createRequestDto.role_id },
      });
      if (!existingRole) {
        throw new NotFoundException(
          `Role with ID ${createRequestDto.role_id} not found`,
        );
      }

      const createdRequest = await this.prismaService.request.create({
        data: {
          name: createRequestDto.name,
          surname: createRequestDto.surname,
          middle_name: createRequestDto.middle_name || '',
          email: createRequestDto.email,
          request_type: createRequestDto.request_type,
          status: 'pending',
          create_date: new Date(),
          complete_date: new Date(0),
          resource: { connect: { id: createRequestDto.resource_id } },
          role: { connect: { id: createRequestDto.role_id } },
        },
        include: {
          resource: true,
          role: {
            include: {
              access: true,
            },
          },
        },
      });

      return this.mapToRequestDto(createdRequest);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to create request: ${error.message}`);
    }
  }

  async findAll(): Promise<RequestDto[]> {
    const requests = await this.prismaService.request.findMany({
      include: {
        resource: true,
        role: {
          include: {
            access: true,
          },
        },
      },
      orderBy: {
        create_date: 'desc',
      },
    });

    return requests.map((request) => this.mapToRequestDto(request));
  }

  async findOneById(id: number): Promise<RequestDto> {
    const request = await this.prismaService.request.findUnique({
      where: { id },
      include: {
        resource: true,
        role: {
          include: {
            access: true,
          },
        },
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

      const updatedRequest = await this.prismaService.request.update({
        where: { id },
        data: updateData,
        include: {
          resource: true,
          role: {
            include: {
              access: true,
            },
          },
        },
      });

      return this.mapToRequestDto(updatedRequest);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Request with ID ${id} not found`);
      }
      throw new Error(`Failed to update request status: ${error.message}`);
    }
  }

  async findAllResources(): Promise<ResourceDto[]> {
    const resources = await this.prismaService.resource.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        link: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return resources.map((resource) => ({
      id: resource.id,
      name: resource.name,
      description: resource.description,
      link: resource.link,
    }));
  }

  async findAllRoles(): Promise<RoleDto[]> {
    const roles = await this.prismaService.role.findMany({
      include: {
        access: true,
      },
      orderBy: {
        name: 'asc',
      },
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
        request.complete_date?.getTime() > 0 ? request.complete_date : undefined,
      resource_id: request.resource_id,
      role_id: request.role_id,
      resource_name: request.resource?.name || '',
      role_name: request.role?.name || '',
      resource_link: request.resource?.link || '',
    };
  }
}