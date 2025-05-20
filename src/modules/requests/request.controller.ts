import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseIntPipe,
  Request,
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
    // Если user_id не указан, берём из JWT-токена
    const dtoWithUser = {
      ...createRequestDto,
      user_id: createRequestDto.user_id || req.user?.userId,
    };
    return this.requestService.create(dtoWithUser);
  }

  @Get()
  async getAllRequests(): Promise<RequestDto[]> {
    return this.requestService.findAll();
  }

  @Get(':id')
  async getRequestById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<RequestDto> {
    return this.requestService.findOneById(id);
  }

  @Put(':id/status')
  async updateRequestStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateRequestStatusDto,
  ): Promise<RequestDto> {
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
