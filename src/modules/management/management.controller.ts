import { Body, Controller, Get, Post, UseGuards  } from '@nestjs/common';
import { ManagementService } from './management.service';
import {
  CreateResourceDto,
  CreateRoleDto,
  ManagementResourceDto,
  ManagementRoleDto,
  ManagementUserDto,
  ResourceResponseDto,
} from './dto/management.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { AccessLevel } from '../auth/enums/user-role.enum';

@Controller('management')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(AccessLevel.ADMIN) 

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

  @Post('resource')
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
