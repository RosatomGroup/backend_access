import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RequestService } from './request.service';
import {
  CreateRequestDto,
  RequestDto,
  UpdateRequestStatusDto,
} from './request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

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
      userId: createRequestDto.userId || user.id,
    };
    return this.requestService.create(dtoWithUser);
  }

  @Get()
  async getAllRequests(
    @CurrentUser() user: JwtPayload,
  ): Promise<RequestDto[]> {
    return this.requestService.findAll(user);
  }

  @Get(':id')
  async getRequestById(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: JwtPayload,
  ): Promise<RequestDto> {
    const request = await this.requestService.findOneById(id);

    const isAdmin = user.accessLevel === 'ADMIN';
    const isOwner = request.userId === user.id;

    if (!isAdmin && !isOwner) {
      throw new ForbiddenException('Нет прав доступа к этой заявке');
    }

    return request;
  }

  @Patch(':id/status')
  async updateRequestStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateRequestStatusDto,
    @CurrentUser() user: JwtPayload,
  ): Promise<RequestDto> {
    return this.requestService.updateStatus(id, updateStatusDto, user);
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
