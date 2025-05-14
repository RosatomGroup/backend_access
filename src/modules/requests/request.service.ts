// import { OwnRequestDto } from './request.dto';
// import { PrismaService } from '../prisma/prisma.service';

// export class RequestService {
//   constructor(private readonly prisma: PrismaService) {}

//   async getOwnRequests(userId: number): Promise<OwnRequestDto[]> {
//     const requestDb = await this.prisma.request.findMany({
//       where: { id: userId },
//       include: {
//         resource: true,
//         // role: true,
//       },
//     });

//     return requestDb.map((request) => ({
//       id: request.id,
//       requester: request.status, //requester
//       createDate: request.create_date,
//       status: request.status,
//       resourceName: request.resource.name,
//       roleName: 'role_name',
//     }));
//   }
// }

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRequestDto, RequestDto, OwnRequestDto } from './request.dto';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  async createRequest(createRequestDto: CreateRequestDto): Promise<RequestDto> {
    const user = await this.prisma.user.findUnique({
      where: { id: createRequestDto.userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const resource = await this.prisma.resource.findUnique({
      where: { id: createRequestDto.resourceId },
    });

    if (!resource) {
      throw new Error('Resource not found');
    }

    let role;
    if (createRequestDto.roleId) {
      role = await this.prisma.role.findUnique({
        where: { id: createRequestDto.roleId },
      });
      if (!role) {
        throw new Error('Role not found');
      }
    }

    const requestData = {
      status: 'в работе',
      request_type: createRequestDto.requestSubject,
      create_date: new Date(),
      complete_date: new Date(),
      resource: {
        connect: { id: createRequestDto.resourceId }
      },
      user_request: {
        create: {
          user: {
            connect: { id: createRequestDto.userId }
          }
        }
      }
    };

    if (createRequestDto.roleId) {
      requestData['role'] = {
        connect: { id: createRequestDto.roleId }
      };
    }

    const request = await this.prisma.request.create({
      data: requestData,
      include: {
        resource: true,
        user_request: {
          include: {
            user: true
          }
        },
        role: true
      }
    });

    return {
      id: request.id,
      name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
      requestSubject: request.request_type,
      role: request.role?.description || 'Не указана',
      status: request.status,
      system: request.resource.name,
      submissionTime: request.create_date.toISOString(),
      email: createRequestDto.email
    };
  }

  async getOwnRequests(userId: number): Promise<OwnRequestDto[]> {
    const requests = await this.prisma.request.findMany({
      where: {
        user_request: {
          some: {
            user_id: userId
          }
        }
      },
      include: {
        resource: true,
        user_request: {
          include: {
            user: true
          }
        },
        role: true
      }
    });

    return requests.map((request) => ({
      id: request.id,
      requester: `${request.user_request[0].user.surname} ${request.user_request[0].user.name}`,
      createDate: request.create_date,
      status: request.status,
      resourceName: request.resource.name,
      roleName: request.role?.description || 'Не указана'
    }));
  }

  async getAllOutgoingRequests(): Promise<RequestDto[]> {
    const requests = await this.prisma.request.findMany({
      include: {
        resource: true,
        user_request: {
          include: {
            user: true
          }
        },
        role: true
      },
      orderBy: {
        create_date: 'desc'
      }
    });

    return requests.map((request) => {
      const user = request.user_request[0]?.user;
      return {
        id: request.id,
        name: user ? `${user.surname} ${user.name} ${user.middle_name || ''}`.trim() : 'Unknown',
        requestSubject: request.request_type,
        role: request.role?.description || 'Не указана',
        status: request.status,
        system: request.resource.name,
        submissionTime: request.create_date.toISOString(),
        email: user?.email || ''
      };
    });
  }

  async updateRequestStatus(id: number, status: string) {
    return this.prisma.request.update({
      where: { id },
      data: { status }
    });
  }
}