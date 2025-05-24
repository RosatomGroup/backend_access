import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
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
  middleName?: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsString()
  @Length(1, 80)
  rang?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  @Length(1, 80)
  subdivision?: string;

  @IsOptional()
  @IsInt()
  serviceNumber?: number;

  @IsOptional()
  @IsEmail()
  email?: string;
}

export class ReplyUpdateUserDto {
  name?: string;
  surname?: string;
  middleName?: string;
  phone?: string;
  rang?: string;
  birthDate?: Date;
  subdivision?: string;
  serviceNumber?: number;
  email?: string;
}

export class ManagementUserDto {
  key: number;
  name: string;
  rang: string;
  subdivision: string;
  email: string;
}
