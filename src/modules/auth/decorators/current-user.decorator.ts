import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload.interface'; // Тип для данных из JWT

export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user; // Данные пользователя из JWT (добавляются в Guard)
    
    // Если указано конкретное поле (например, @CurrentUser('email'))
    return data ? user?.[data] : user; // Возвращаем поле или весь объект
  },
);