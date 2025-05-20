import { IsEmail, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  @IsOptional()
  middle_name?: string;

  @IsEmail()
  email: string;

  @IsInt()
  resource_id: number;

  @IsInt()
  role_id: number;

  @IsEnum(['grant_access', 'revoke_access'])
  request_type: string;

  @IsInt()
  @IsOptional()
  user_id?: number; // Для привязки к пользователю
}

export class UpdateRequestStatusDto {
  @IsEnum(['approved', 'rejected', 'pending'])
  status: 'approved' | 'rejected' | 'pending';
}

export class RequestDto {
  id: number;
  name: string;
  surname: string;
  middle_name: string;
  email: string;
  request_type: string;
  status: string;
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
