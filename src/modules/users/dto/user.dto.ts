import {IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 30)
    password: string;
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
    middle_name?: string;

    @IsOptional()
    @IsInt()
    @Length(3, 20)
    service_number?: number;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @Length(6, 30)
    password?: string;
}