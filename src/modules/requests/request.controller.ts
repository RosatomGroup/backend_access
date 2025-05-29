import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  ForbiddenException,
} from '@nestjs/common';
import { RequestService } from './request.service';
import {
  CreateRequestDto,
  RequestDto,
  UpdateRequestStatusDto,
} from './request.dto';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createRequest(
    @Body() createRequestDto: CreateRequestDto,
    @Request() req,
  ): Promise<RequestDto> {
    const dtoWithUser = {
      ...createRequestDto,
      userId: createRequestDto.userId || req.user?.userId,
    };
    return this.requestService.create(dtoWithUser);
  }

  @Get()
  async getAllRequests(@Request() req): Promise<RequestDto[]> {
    const isAdmin = req.user?.accessLevel === 'ADMIN';
    return this.requestService.findAll(isAdmin, req.user?.userId);
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

  @Put(':id/status')
  async updateRequestStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateRequestStatusDto,
    @Request() req,
  ): Promise<RequestDto> {
    const request = await this.requestService.findOneById(id);
    
    const isAdmin = req.user?.accessLevel === 'ADMIN';
    if (!isAdmin) {
      throw new ForbiddenException('Only admin can update request status');
    }
    
    return this.requestService.updateStatus(id, updateStatusDto);
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