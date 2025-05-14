import {
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    Min,
    Max,
  } from 'class-validator';
  import { Transform } from 'class-transformer';
  
  export class CreateUserDto {
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
    @IsString()
    @Length(1, 100, { message: 'Подразделение должно быть до 100 символов' })
    subdivision?: string;
  
    @IsNotEmpty({ message: 'Роль обязательна' })
    @IsInt()
    role_id: number;
  }