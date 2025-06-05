import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RequestService } from './request.service';
import {
  CreateRequestDto,
  RequestDto,
  UpdateRequestStatusDto,
} from './request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { AccessLevel } from '../auth/enums/user-role.enum';

@Controller('requests')
@UseGuards(JwtAuthGuard)
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createRequest(
    @Body() createRequestDto: CreateRequestDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<RequestDto> {
    const dtoWithUser = {
      ...createRequestDto,
      userId: createRequestDto.userId || user.userId,
    };
    return this.requestService.create(dtoWithUser);
  }

  @Get()
  async getAllRequests(@CurrentUser() user: JwtPayload): Promise<RequestDto[]> {
    return this.requestService.findAll(user);
  }

  @Get('accesses/:userId')
  async getUserAccesses(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<RequestDto[]> {
    return this.requestService.findAccesses(userId);
  }

  @Get(':id')
  async getRequestById(
    @Param('id', ParseIntPipe) id: number,
    @Request() req,
  ): Promise<RequestDto> {
    const request = await this.requestService.findOneById(id);

    const isAdmin = req.user?.accessLevel === 'ADMIN';
    const isOwner = request.userId === req.user?.userId;

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('Access denied');
    }

    return request;
  }

  @Patch(':id/status')
  @Roles(AccessLevel.ADMIN)
  async updateRequestStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateRequestStatusDto,
  ): Promise<RequestDto> {
    return this.requestService.updateStatus(id, updateStatusDto);
  }

  @Get(':id/status')
  async getRequestStatus(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<RequestDto> {
    return this.requestService.getStatus(id);
  }

  @Get('resources')
  async getAllResources() {
    return this.requestService.findAllResources();
  }

  @Get('roles')
  async getAllRoles() {
    return this.requestService.findAllRoles();
  }
}
