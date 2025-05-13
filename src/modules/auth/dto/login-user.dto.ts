import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, {message: 'Введите корректное название почты'})
  @IsNotEmpty({message: 'Почта  обязательна для заполнения'})
  email: string;

  @IsString({message: 'Пароль должен быть строкой'})
  @IsNotEmpty({message: 'Пароль обязателен для заполнения'})
  @MinLength(8, {message: 'Пароль должен быть не менее 8 символов'})
  password: string;
}
