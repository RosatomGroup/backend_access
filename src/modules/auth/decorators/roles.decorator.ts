import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enums/user-role.enum';

export const ROLES_KEY = 'roles'; // Ключ для метаданных

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);