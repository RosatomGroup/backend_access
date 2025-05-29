import { AccessLevel } from '@prisma/client';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email не должен быть пустым' })
  @IsEmail({}, { message: 'Некорректный формат email' })
  email: string;

  @IsNotEmpty({ message: 'Пароль не должен быть пустым' })
  @Length(6, 30, { message: 'Пароль должен быть от 6 до 30 символов' })
  password: string;
}

export class ReplyCreateUserDto {
  id: number;
  email: string;
  accessLevel: AccessLevel;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Имя должно быть строкой' })
  @Length(1, 40, { message: 'Имя должно быть от 1 до 40 символов' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Фамилия должна быть строкой' })
  @Length(1, 40, { message: 'Фамилия должна быть от 1 до 40 символов' })
  surname?: string;

  @IsOptional()
  @IsString({ message: 'Отчество должно быть строкой' })
  @Length(1, 40, { message: 'Отчество должно быть от 1 до 40 символов' })
  middleName?: string;

  @IsOptional()
  @IsString({ message: 'Ссылка на изображение должна быть строкой' })
  avatarUrl?: string;

  @IsOptional()
  @IsPhoneNumber('RU', { message: 'Некорректный номер телефона' })
  phone?: string;

  @IsOptional()
  @IsString({ message: 'Звание должно быть строкой' })
  @Length(1, 80, { message: 'Звание должно быть от 1 до 80 символов' })
  rang?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Некорректный формат даты' })
  birthDate?: string;

  @IsOptional()
  @IsString({ message: 'Подразделение должно быть строкой' })
  @Length(1, 80, { message: 'Подразделение должно быть от 1 до 80 символов' })
  subdivision?: string;

  @IsOptional()
  @IsInt({ message: 'Табельный номер должен быть целым числом' })
  @Min(1, { message: 'Табельный номер должен быть положительным' })
  @Max(999999, { message: 'Табельный номер слишком большой' })
  serviceNumber?: number;
}

export class ReplyUpdateUserDto {
  name: string;
  surname?: string;
  middleName?: string;
  avatarUrl?: string;
  phone?: string;
  rang?: string;
  birthDate?: Date;
  subdivision?: string;
  serviceNumber?: number;

  constructor(partial: Partial<ReplyUpdateUserDto>) {
    Object.assign(this, partial);
  }
}

export class ManagementUserDto {
  @IsInt()
  key: number;

  @IsString()
  name: string;

  @IsString()
  rang: string;

  @IsString()
  subdivision: string;

  @IsEmail()
  email: string;
}