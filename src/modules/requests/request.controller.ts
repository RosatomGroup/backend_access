// import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
// import { RequestService } from './request.service';
// import { CreateRequestDto, RequestDto } from './request.dto';

// @Controller('requests')
// export class RequestController {
//   constructor(private readonly requestService: RequestService) {}

//   @Post()
//   async createRequest(@Body() createRequestDto: CreateRequestDto): Promise<RequestDto> {
//     return this.requestService.createRequest(createRequestDto);
//   }

//   @Get('user/:id')
//   async getOwnRequests(@Param('id', ParseIntPipe) id: number) {
//     return this.requestService.getOwnRequests(id);
//   }

//   @Get('outgoing')
//   async getAllOutgoingRequests(): Promise<RequestDto[]> {
//     return this.requestService.getAllOutgoingRequests();
//   }

//   @Put(':id/status')
//   async updateRequestStatus(
//     @Param('id', ParseIntPipe) id: number,
//     @Body('status') status: string,
//   ) {
//     return this.requestService.updateRequestStatus(id, status);
//   }

//   @Get('systems')
//   async getSystems() {
//     return this.requestService.getSystems();
//   }

//   @Get('roles')
//   async getRoles() {
//     return this.requestService.getRoles();
//   }

//   @Get('system/:systemId/roles')
//   async getRolesBySystem(@Param('systemId', ParseIntPipe) systemId: number) {
//     return this.requestService.getRolesBySystem(systemId);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseIntPipe,
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
  ): Promise<RequestDto> {
    return this.requestService.create(createRequestDto);
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