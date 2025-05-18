import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Min,
  Max,
  IsIn,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { UpdateUserDto } from './update-user.dto';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email обязателен' })
  @IsEmail({}, { message: 'Некорректный формат email' })
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @IsNotEmpty({ message: 'Пароль обязателен' })
  @IsString()
  @Length(8, 30, { message: 'Пароль должен быть от 8 до 30 символов' })
  password: string;
}

export class LoginDto {
  email: string;
  password: string;
}

export class ReplyCreateUserDto {
  id: number;
  email: string;
}

// export class UpdateUserDto {
//   @IsOptional()
//   @IsEmail({}, { message: 'Некорректный формат email' })
//   @Transform(({ value }) => value?.toLowerCase()?.trim())
//   email?: string;

//   @IsOptional()
//   @IsString({ message: 'Имя должно быть строкой' })
//   @Length(1, 40, { message: 'Имя должно быть от 1 до 40 символов' })
//   name?: string;

//   @IsOptional()
//   @IsString({ message: 'Фамилия должна быть строкой' })
//   @Length(1, 40, { message: 'Фамилия должна быть от 1 до 40 символов' })
//   surname?: string;

//   @IsOptional()
//   @IsString({ message: 'Отчество должно быть строкой' })
//   @Length(1, 40, { message: 'Отчество должно быть от 1 до 40 символов' })
//   middle_name?: string;

//   @IsOptional()
//   @IsInt({ message: 'Служебный номер должен быть числом' })
//   @Min(1000, { message: 'Номер должен быть не менее 1000' })
//   @Max(999999, { message: 'Номер должен быть не более 999999' })
//   service_number?: number;

//   @IsOptional()
//   @IsString({ message: 'Подразделение должно быть строкой' })
//   subdivision?: string;

//   @IsOptional()
//   @IsString({ message: 'Подразделение должно быть строкой' })
//   role_id?: number | null;
// }

export class AdminCreateUserDto {
  @IsNotEmpty({ message: 'Email обязателен' })
  @IsEmail({}, { message: 'Некорректный формат email' })
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @IsNotEmpty({ message: 'Пароль обязателен' })
  @IsString()
  @Length(8, 30, { message: 'Пароль должен быть от 8 до 30 символов' })
  password: string;

  @IsNotEmpty({ message: 'Имя обязательно' })
  @IsString()
  @Length(1, 40, { message: 'Имя должно быть от 1 до 40 символов' })
  name: string;

  @IsNotEmpty({ message: 'Фамилия обязательна' })
  @IsString()
  @Length(1, 40, { message: 'Фамилия должна быть от 1 до 40 символов' })
  surname: string;

  @IsOptional()
  @IsString()
  @Length(1, 40, { message: 'Отчество должно быть от 1 до 40 символов' })
  middle_name?: string;

  @IsOptional()
  @IsInt()
  @Min(1000, { message: 'Номер должен быть не менее 1000' })
  @Max(999999, { message: 'Номер должен быть не более 999999' })
  service_number?: number;

  @IsOptional()
  @IsString()
  subdivision?: string;

  @IsNotEmpty({ message: 'Роль обязательна' })
  @IsInt()
  role_id: number;
}

export class AdminUpdateUserDto extends UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(8, 30, { message: 'Пароль должен быть от 8 до 30 символов' })
  password?: string; // Оставляем как строку, хеширование будет в сервисе
}

export class ManagementUserDto {
  key: number;
  name: string;
  rang: string;
  subdivision: string;
  address: string;
}

export class UserFilterDto {
  @IsOptional()
  @IsInt()
  role_id?: number;

  @IsOptional()
  @IsString()
  @Length(1, 100, { message: 'Поисковый запрос должен быть от 1 до 100 символов' })
  search?: string;

  @IsOptional()
  @IsIn(['asc', 'desc'], { message: 'Допустимые значения сортировки: asc или desc' })
  sort?: 'asc' | 'desc';

  @IsOptional()
  @IsInt()
  @Min(1, { message: 'Номер страницы должен быть не менее 1' })
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1, { message: 'Лимит должен быть не менее 1' })
  @Max(100, { message: 'Лимит должен быть не более 100' })
  limit?: number = 10;
}