import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  resourceId: number;

  @IsOptional()
  @IsNumber()
  roleId?: number;

  @IsNotEmpty()
  @IsString()
  requestSubject: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class RequestDto {
  id: number;
  name: string;
  requestSubject: string;
  role: string;
  status: string;
  system: string;
  submissionTime: string;
  email: string;
}

export class OwnRequestDto {
  id: number;
  requester: string;
  createDate: Date;
  status: string;
  resourceName: string;
  roleName: string;
}

export class SystemDto {
  id: number;
  name: string;
  description: string;
}

export class RoleDto {
  id: number;
  name: string;
  description: string;
  accessLevel: number;
  systemName: string;
}