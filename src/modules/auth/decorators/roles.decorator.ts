import { SetMetadata } from '@nestjs/common';
import { AccessLevel } from '../enums/user-role.enum';

export const ROLES_KEY = 'roles'; // Ключ для метаданных

export const Roles = (...roles: AccessLevel[]) => SetMetadata(ROLES_KEY, roles);