import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class ManagementUserDto {
  @IsInt()
  key: number;

  @IsString()
  @MaxLength(40)
  name: string;

  @IsString()
  @MaxLength(80)
  rang: string;

  @IsString()
  @MaxLength(80)
  subdivision: string;

  @IsEmail()
  @MaxLength(255)
  email: string;
}

export class ManagementRoleDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsString()
  @MaxLength(100)
  resourceName: string;
}

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsNotEmpty()
  @IsInt()
  resourceId: number;
}

export class ManagementResourceDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsString()
  @MaxLength(255)
  owner: string;
}

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsUrl()
  @IsNotEmpty()
  @MaxLength(255)
  link: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  owner: string;
}

export class ResourceResponseDto {
  id: number;
  name: string;
  description: string;
  link: string;
  owner: string;
}
