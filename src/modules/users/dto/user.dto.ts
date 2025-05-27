// import {
//   IsDateString,
//   IsEmail,
//   IsInt,
//   IsNotEmpty,
//   IsPhoneNumber,
//   IsString,
//   Length,
// } from 'class-validator';

// export class CreateUserDto {
//   @IsNotEmpty()
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   @Length(6, 30)
//   password: string;
// }

// export class ReplyCreateUserDto {
//   id: number;
//   email: string;
// }

// export class UpdateUserDto {
//   @IsString()
//   @Length(1, 40)
//   name: string;

//   @IsString()
//   @Length(1, 40)
//   surname?: string;

//   @IsString()
//   @Length(1, 40)
//   middleName?: string;

//   @IsPhoneNumber()
//   phone?: string;

//   @IsString()
//   @Length(1, 80)
//   rang?: string;

//   @IsDateString()
//   birthDate?: string;

//   @IsString()
//   @Length(1, 80)
//   subdivision?: string;

//   @IsInt()
//   serviceNumber?: number;
// }

// export class ReplyUpdateUserDto {
//   name: string;
//   surname?: string;
//   middleName: string;
//   phone: string;
//   rang: string;
//   birthDate?: Date;
//   subdivision?: string;
//   serviceNumber: number;
// }

// export class ManagementUserDto {
//   key: number;
//   name: string;
//   rang: string;
//   subdivision: string;
//   email: string;
// }

import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

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