import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, resource, user } from '../../../prisma/generated/client';
import {
  ManagementResourceDto,
  ManagementRoleDto,
  ManagementUserDto,
} from './dto/management.dto';

type roleWithResource = Prisma.roleGetPayload<{
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

  private mapUserToManagementDto(user: user): ManagementUserDto {
    return {
      key: user.id,
      name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
      rang: user.rang,
      subdivision: user.subdivision,
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
      systemName: role.resource.name,
      owner: role.resource.owner,
    };
  }

  async getResources(): Promise<ManagementResourceDto[]> {
    const resources = await this.prisma.resource.findMany();
    return resources.map((resource) =>
      this.mapResourceToManagementDto(resource),
    );
  }

  private mapResourceToManagementDto(
    resource: resource,
  ): ManagementResourceDto {
    return {
      name: resource.name,
      description: resource.description,
      owner: resource.owner,
    };
  }
}
