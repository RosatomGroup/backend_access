import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TokenService } from './token.service';
import { AccessTokenService } from './strategies/access-token.service';
import { RefreshTokenService } from './strategies/refresh-token.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ConfigModule, JwtModule.register({}), PrismaModule],
  providers: [TokenService, AccessTokenService, RefreshTokenService],
  exports: [TokenService, AccessTokenService, RefreshTokenService],
})
export class TokenModule {}
