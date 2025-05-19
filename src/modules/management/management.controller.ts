import { Controller, Get } from '@nestjs/common';
import { ManagementService } from './management.service';
import {
  ManagementResourceDto,
  ManagementRoleDto,
  ManagementUserDto,
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

  @Get('resources')
  async getResources(): Promise<ManagementResourceDto[]> {
    return this.managementService.getResources();
  }
}
