import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AccessLevel } from '../../auth/enums/user-role.enum';

@Injectable()
export class RefreshTokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async sign(userId: number, email: string, rememberMe: boolean, accessLevel: AccessLevel) {
    return this.jwtService.signAsync(
      { userId, email, rememberMe, accessLevel },
      {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn:
          this.configService.get<string>('JWT_REFRESH_EXPIRES_IN') || '7d',
      },
    );
  }

  verify(token: string) {
    return this.jwtService.verify(token, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    });
  }
}
