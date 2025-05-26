import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
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
  @IsString()
  @Length(1, 40)
  name: string;

  @IsString()
  @Length(1, 40)
  surname?: string;

  @IsString()
  @Length(1, 40)
  middleName?: string;

  @IsPhoneNumber()
  phone?: string;

  @IsString()
  @Length(1, 80)
  rang?: string;

  @IsDateString()
  birthDate?: string;

  @IsString()
  @Length(1, 80)
  subdivision?: string;

  @IsInt()
  serviceNumber?: number;
}

export class ReplyUpdateUserDto {
  name: string;
  surname?: string;
  middleName: string;
  phone: string;
  rang: string;
  birthDate?: Date;
  subdivision?: string;
  serviceNumber: number;
}

export class ManagementUserDto {
  key: number;
  name: string;
  rang: string;
  subdivision: string;
  email: string;
}
