import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  rememberMe: boolean;
}
