import {
  RequestStatus as PrismaRequestStatus,
  RequestType as PrismaRequestType,
} from '@prisma/client';

import { IsEmail, IsEnum, IsInt, IsString } from 'class-validator';

export enum RequestType {
  GRANT_ACCESS = 'GRANT_ACCESS',
  REVOKE_ACCESS = 'REVOKE_ACCESS',
}

export enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export class CreateRequestDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  middleName: string;

  @IsEmail()
  email: string;

  @IsInt()
  resourceId: number;

  @IsInt()
  roleId: number;

  @IsEnum(RequestType)
  requestType: RequestType;

  @IsInt()
  userId?: number;
}

export class UpdateRequestStatusDto {
  @IsEnum(RequestStatus)
  status: RequestStatus;
}

export class RequestDto {
  id: number;
  name: string;
  surname: string;
  middleName: string;
  email: string;
  requestType: PrismaRequestType;
  status: PrismaRequestStatus;
  createDate: Date;
  completeDate?: Date;
  resourceId: number;
  roleId: number;
  resourceName: string;
  roleName: string;
  resourceLink?: string;
  userId?: number;
}

export class ResourceDto {
  id: number;
  name: string;
  description: string;
  link?: string;
}

export class RoleDto {
  id: number;
  name: string;
  description: string;
}
