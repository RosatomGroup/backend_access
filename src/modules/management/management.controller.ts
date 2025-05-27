import { Body, Controller, Get, Post } from '@nestjs/common';
import { ManagementService } from './management.service';
import {
  CreateResourceDto,
  CreateRoleDto,
  ManagementResourceDto,
  ManagementRoleDto,
  ManagementUserDto,
  ResourceResponseDto,
} from './dto/management.dto';

@Controller('management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}

  @Get('users')
  async getUsers(): Promise<ManagementUserDto[]> {
    return this.managementService.getUsers();
  }

  @Get('roles')
  async getRoles(): Promise<ManagementRoleDto[]> {
    return this.managementService.getRoles();
  }

  @Post('roles')
  async addRole(
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<ManagementRoleDto> {
    return this.managementService.addRole(createRoleDto);
  }

  @Post('resources')
  async createResource(
    @Body() createResourceDto: CreateResourceDto,
  ): Promise<ResourceResponseDto> {
    return this.managementService.createResource(createResourceDto);
  }

  @Get('resources')
  async getResources(): Promise<ManagementResourceDto[]> {
    return this.managementService.getResources();
  }
}
