
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const normalizedEmail = email.toLowerCase().trim();
    const user = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        id: true,
        email: true,
        password: true,
        accessLevel: true,
      },
    });
    
    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Неверный пароль');
    }

    const { password, ...result } = user;
    return result;
  }

  async login(user: any, rememberMe: boolean) {
    console.log('User object passed to login:', user);
    const payload = { 
      email: user.email, 
      sub: user.id,
      accessLevel: user.accessLevel
    };

    const { accessToken, refreshToken } = await this.tokenService.generateTokens({
      userId: user.id,
      email: user.email,
      rememberMe,
      accessLevel: user.accessLevel
    });

    return { 
      accessToken, 
      refreshToken, 
      rememberMe,
      accessLevel: user.accessLevel
    };
  }
}