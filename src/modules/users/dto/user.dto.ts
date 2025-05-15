import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}

export class ReplyCreateUserDto {
  id: number;
  email: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(1, 40)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(1, 40)
  surname?: string;

  @IsOptional()
  @IsString()
  @Length(1, 40)
  middle_name?: string;

  @IsOptional()
  @IsInt()
  @Length(3, 20)
  service_number?: number;

  @IsOptional()
  subdivision?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Length(6, 30)
  password?: string;
}

export class ReplyUpdateUserDto {
  name?: string;

  surname?: string;

  middle_name?: string;

  service_number?: number;

  subdivision?: string;

  email?: string;

  password?: string;
}

export class ManagementUserDto {
  key: number;
  name: string;
  rang: string;
  subdivision: string;
  email: string;
}
