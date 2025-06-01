import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AccessLevel } from '../../auth/enums/user-role.enum';

@Injectable()
export class AccessTokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async sign(userId: number, email: string, accessLevel: AccessLevel) {
    return this.jwtService.signAsync(
      { userId, email, accessLevel },
      {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn:
          this.configService.get<string>('JWT_ACCESS_EXPIRES_IN') || '15m',
      },
    );
  }

  verify(token: string) {
    return this.jwtService.verify(token, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
    });
  }
}
