import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessLevel } from '../enums/user-role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<AccessLevel[]>(ROLES_KEY, context.getHandler());
    
    if (!requiredRoles) {
      this.logger.debug('No roles required - access granted');
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    this.logger.debug(`Checking access for user: ${JSON.stringify(user)}`);
    this.logger.debug(`Required roles: ${requiredRoles.join(', ')}`);

    if (!user) {
      this.logger.warn('No user in request');
      throw new ForbiddenException('Authentication required');
    }

    // Проверяем все возможные варианты хранения роли
    const userRole = user.role || user.role_user || user.role?.name;
    
    if (!userRole) {
      this.logger.error(`Role not found in user object: ${JSON.stringify(user)}`);
      throw new ForbiddenException('User role not defined');
    }

    const hasAccess = requiredRoles.includes(userRole);
    
    if (!hasAccess) {
      this.logger.warn(`Access denied. User role: ${userRole}, Required: ${requiredRoles.join(', ')}`);
      throw new ForbiddenException('Insufficient permissions');
    }

    this.logger.debug('Access granted');
    return true;
  }
}