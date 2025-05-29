import { IsEmail, IsString, MinLength, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Пожалуйста, введите действующий адрес электронной почты' }) // Сообщение об ошибке на русском
  @IsNotEmpty({ message: 'Адрес электронной почты не может быть пустым' }) // Сообщение об ошибке на русском
  email: string;

  @IsString({ message: 'Пароль должен быть строкой' }) // Сообщение об ошибке на русском
  @IsNotEmpty({ message: 'Пароль не может быть пустым' }) // Сообщение об ошибке на русском
  @MinLength(8, { message: 'Пароль должен содержать не менее 8 символов' }) // Сообщение об ошибке на русском
  password: string;

  @IsBoolean({ message: 'Значение "Запомнить меня" должно быть булевым (true или false)' }) // Сообщение об ошибке на русском
  @IsOptional() // Делаем поле опциональным, если оно может отсутствовать в запросе
  rememberMe: boolean; // Указываем, что поле может быть undefined
}