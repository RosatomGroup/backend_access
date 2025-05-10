import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get(':id')
  async getOwnRequests(@Param('id', ParseIntPipe) id: number) {
    await this.requestService.getOwnRequests(id);
  }
}
