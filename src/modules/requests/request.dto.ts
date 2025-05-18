// import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

// export class CreateRequestDto {
//   @IsNotEmpty()
//   @IsNumber()
//   userId: number;

//   @IsNotEmpty()
//   @IsNumber()
//   resourceId: number;

//   @IsOptional()
//   @IsNumber()
//   roleId?: number;

//   @IsNotEmpty()
//   @IsString()
//   requestSubject: string;

//   @IsNotEmpty()
//   @IsEmail()
//   email: string;
// }

// export class RequestDto {
//   id: number;
//   name: string;
//   requestSubject: string;
//   role: string;
//   status: string;
//   system: string;
//   submissionTime: string;
//   email: string;
// }

// export class OwnRequestDto {
//   id: number;
//   requester: string;
//   createDate: Date;
//   status: string;
//   resourceName: string;
//   roleName: string;
// }

// export class SystemDto {
//   id: number;
//   name: string;
//   description: string;
// }

// export class RoleDto {
//   id: number;
//   name: string;
//   description: string;
//   accessLevel: number;
//   systemName: string;
// }


// import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

// export class CreateRequestDto {
//   @IsNotEmpty()
//   @IsString()
//   name: string;

//   @IsNotEmpty()
//   @IsString()
//   surname: string;

//   @IsNotEmpty()
//   @IsString()
//   middle_name: string;

//   @IsNotEmpty()
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   @IsNumber()
//   resource_id: number;

//   @IsNotEmpty()
//   @IsNumber()
//   role_id: number;

//   @IsOptional()
//   @IsString()
//   status?: string;
// }

// export class RequestDto {
//   id: number;
//   name: string;
//   surname: string;
//   middle_name: string;
//   email: string;
//   status: string;
//   create_date: Date;
//   complete_date: Date;
//   resource_id: number;
//   role_id: number;
//   resource_name: string;
//   role_name: string;
//   resource_link: string; 
// }

// export class UpdateRequestStatusDto {
//   @IsNotEmpty()
//   @IsString()
//   status: string;
// }

// export class ResourceDto {
//   id: number;
//   name: string;
//   description: string;
//   // link: string;
// }

// export class RoleDto {
//   id: number;
//   name: string;
//   description: string;
//   access_level: number;
// }

export class CreateRequestDto {
  name: string;
  surname: string;
  middle_name?: string;
  email: string;
  resource_id: number;
  role_id: number;
  request_type: string;
}

export class UpdateRequestStatusDto {
  status: 'approved' | 'rejected' | 'pending';
}

export class RequestDto {
  id: number;
  name: string;
  surname: string;
  middle_name?: string;
  email: string;
  request_type: string;
  status: string;
  create_date: Date;
  complete_date?: Date;
  resource_id: number;
  role_id: number;
  resource_name: string;
  role_name: string;
  resource_link?: string;
}

export class ResourceDto {
  id: number;
  name: string;
  description: string;
  link?: string;
}

export class RoleDto {
  id: number;
  name: string;
  description: string;
  access_level: number;
}