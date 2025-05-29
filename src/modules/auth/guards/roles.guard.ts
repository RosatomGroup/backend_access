import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessLevel } from '../enums/user-role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<AccessLevel[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      this.logger.debug(
        'No roles required on this route or controller - access granted by RolesGuard.',
      );
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    this.logger.debug(`Checking access for user: ${JSON.stringify(user)}`);
    this.logger.debug(`Required roles: ${requiredRoles.join(', ')}`);

    // Это как дополнительная проверка, но основная аутентификация уже была.
    if (!user) {
      this.logger.warn(
        'No user in request after authentication. This should not happen if JwtAuthGuard works first.',
      );
      throw new ForbiddenException('Authentication data missing'); // Или UnauthorizedException, если вы хотите переопределить
    }

    const userAccessLevel: AccessLevel = user.accessLevel;

    if (!userAccessLevel) {
      this.logger.error(
        `User accessLevel not defined in user object: ${JSON.stringify(user)}`,
      );
      throw new ForbiddenException('User access level is not defined');
    }

    const hasAccess = requiredRoles.includes(userAccessLevel);

    if (!hasAccess) {
      this.logger.warn(
        `Доступ запрещен. Уровень текущего пользователя: ${userAccessLevel}, Требуемый уровень: ${requiredRoles.join(', ')}`,
      );
      throw new ForbiddenException(
        'Insufficient permissions for this resource.',
      );
    }

    this.logger.debug(`Access granted for user with role ${userAccessLevel}.`);
    return true;
  }
}