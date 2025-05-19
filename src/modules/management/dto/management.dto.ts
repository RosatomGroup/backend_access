export class ManagementUserDto {
  key: number;
  name: string;
  rang: string;
  subdivision: string;
  email: string;
}

export class ManagementRoleDto {
  name: string;
  description: string;
  systemName: string;
  owner: string;
}

export class ManagementResourceDto {
  name: string;
  description: string;
  owner: string;
}
