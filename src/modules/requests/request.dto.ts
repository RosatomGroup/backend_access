import { IsEmail, IsEnum, IsInt, IsString } from 'class-validator';

export enum RequestType {
  GRANT_ACCESS = 'grant_access',
  REVOKE_ACCESS = 'revoke_access',
}

export enum RequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export class CreateRequestDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  middle_name: string;

  @IsEmail()
  email: string;

  @IsInt()
  resource_id: number;

  @IsInt()
  role_id: number;

  @IsEnum(RequestType)
  request_type: RequestType;

  @IsInt()
  user_id?: number;
}

export class UpdateRequestStatusDto {
  @IsEnum(RequestStatus)
  status: RequestStatus;
}

export class RequestDto {
  id: number;
  name: string;
  surname: string;
  middle_name: string;
  email: string;
  request_type: RequestType;
  status: RequestStatus;
  create_date: Date;
  complete_date?: Date;
  resource_id: number;
  role_id: number;
  resource_name: string;
  role_name: string;
  resource_link?: string;
  user_id?: number;
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
  access_level: number;
}
