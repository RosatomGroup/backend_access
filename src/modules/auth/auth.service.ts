import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // Добавляем полную информацию о роли в токен
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role_user,  // Основное поле
      role_user: user.role_user, // Дублирование для совместимости
      ...(user.role && { role_name: user.role.name }) // Если роль в связанной таблице
    };
  
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role_user
      }
    };
  }
}
