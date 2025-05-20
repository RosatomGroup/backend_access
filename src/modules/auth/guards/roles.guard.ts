import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../enums/user-role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Получаем требуемые роли из декоратора @Roles
    const requiredRoles = this.reflector.get<UserRole[]>(
      ROLES_KEY,
      context.getHandler(),
    );

    // Если роли не указаны - доступ разрешен
    if (!requiredRoles) {
      return true;
    }

    // Получаем пользователя из запроса
    const { user } = context.switchToHttp().getRequest();

    // Проверяем, есть ли у пользователя нужная роль
    const hasAccess = requiredRoles.some((role) => user.role === role);

    if (!hasAccess) {
      throw new ForbiddenException('Недостаточно прав для выполнения операции');
    }

    return true;
  }
}