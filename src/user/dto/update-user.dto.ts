import {
    IsEmail,
    IsInt,
    IsOptional,
    IsString,
    Length,
    Min,
    Max,
  } from 'class-validator';
  import { Transform } from 'class-transformer';
  

export class UpdateUserDto {
    @IsOptional()
    @IsEmail({}, { message: 'Некорректный формат email' })
    @Transform(({ value }) => value?.toLowerCase()?.trim())
    email?: string;
  
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
    middle_name?: string;
  
    @IsOptional()
    @IsInt({ message: 'Служебный номер должен быть числом' })
    @Min(1000, { message: 'Номер должен быть не менее 1000' })
    @Max(999999, { message: 'Номер должен быть не более 999999' })
    service_number?: number;
  
    @IsOptional()
    @IsString({ message: 'Подразделение должно быть строкой' })
    subdivision?: string;
  
    @IsOptional()
    @IsString({ message: 'Подразделение должно быть строкой' })
    role_id?: number | null;
  }