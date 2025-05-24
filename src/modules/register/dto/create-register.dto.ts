import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 40)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 40)
  surname: string;

  @IsOptional()
  @IsString()
  @Length(1, 40)
  middle_name?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 30)
  password: string;
}
