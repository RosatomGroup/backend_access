import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Resource, User } from '../../../prisma/generated/client';
import {
  CreateResourceDto,
  CreateRoleDto,
  ManagementResourceDto,
  ManagementRoleDto,
  ManagementUserDto,
  ResourceResponseDto,
} from './dto/management.dto';

type roleWithResource = Prisma.RoleGetPayload<{
  include: {
    resource: true;
  };
}>;

@Injectable()
export class ManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<ManagementUserDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => this.mapUserToManagementDto(user));
  }

  private mapUserToManagementDto(user: User): ManagementUserDto {
    return {
      key: user.id,
      name: `${user.surname} ${user.name} ${user.middleName || ''}`.trim(),
      rang: user.rang || 'Не указано',
      subdivision: user.subdivision || 'Не указано',
      email: user.email,
    };
  }

  async getRoles(): Promise<ManagementRoleDto[]> {
    const roles = await this.prisma.role.findMany({
      include: {
        resource: true,
      },
    });
    return roles.map((role: roleWithResource) =>
      this.mapRoleToManagementDto(role),
    );
  }

  private mapRoleToManagementDto(role: roleWithResource): ManagementRoleDto {
    return {
      name: role.name,
      description: role.description,
      resourceName: role.resource.name,
    };
  }

  async getResources(): Promise<ManagementResourceDto[]> {
    const resources = await this.prisma.resource.findMany();
    return resources.map((resource) =>
      this.mapResourceToManagementDto(resource),
    );
  }

  private mapResourceToManagementDto(
    resource: Resource,
  ): ManagementResourceDto {
    return {
      id: resource.id,
      name: resource.name,
      description: resource.description,
      owner: resource.owner,
      link: resource.link,
    };
  }

  async addRole(createRoleDto: CreateRoleDto): Promise<ManagementRoleDto> {
    const existingRole = await this.prisma.role.findUnique({
      where: { name: createRoleDto.name },
    });

    if (existingRole) {
      throw new ConflictException('Role with this name already exists');
    }

    const resourceExists = await this.prisma.resource.findUnique({
      where: { id: createRoleDto.resourceId },
    });

    if (!resourceExists) {
      throw new ConflictException('Specified resource does not exist');
    }

    try {
      const newRole = await this.prisma.role.create({
        data: {
          name: createRoleDto.name,
          description: createRoleDto.description,
          resourceId: createRoleDto.resourceId,
        },
        include: {
          resource: true,
        },
      });

      return {
        name: newRole.name,
        description: newRole.description,
        resourceName: newRole.resource.name,
      };
    } catch (error) {
      console.error('Error creating role:', error);
      throw error;
    }
  }

  async createResource(
    createResourceDto: CreateResourceDto,
  ): Promise<ResourceResponseDto> {
    const existingResource = await this.prisma.resource.findFirst({
      where: { name: createResourceDto.name },
    });

    if (existingResource) {
      throw new ConflictException('Resource with this name already exists');
    }

    try {
      const resource = await this.prisma.resource.create({
        data: {
          name: createResourceDto.name,
          description: createResourceDto.description,
          link: createResourceDto.link,
          owner: createResourceDto.owner,
        },
      });

      return this.mapToDto(resource);
    } catch (error) {
      throw new Error(`Failed to create resource: ${error.message}`);
    }
  }

  private mapToDto(resource: Resource): ResourceResponseDto {
    return {
      id: resource.id,
      name: resource.name,
      description: resource.description,
      link: resource.link,
      owner: resource.owner,
    };
  }
}
