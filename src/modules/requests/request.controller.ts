import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto, RequestDto } from './request.dto';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createRequest(@Body() createRequestDto: CreateRequestDto): Promise<RequestDto> {
    return this.requestService.createRequest(createRequestDto);
  }

  @Get('user/:id')
  async getOwnRequests(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.getOwnRequests(id);
  }

  @Get('outgoing')
  async getAllOutgoingRequests(): Promise<RequestDto[]> {
    return this.requestService.getAllOutgoingRequests();
  }

  @Put(':id/status')
  async updateRequestStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return this.requestService.updateRequestStatus(id, status);
  }
}