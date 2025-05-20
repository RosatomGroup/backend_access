import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../users/user.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { PasswordResetModule } from '../password-reset/password-reset.module';
import { MailModule } from '../mail/mail.module';
import { RegisterModule } from '../register/register.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    PasswordResetModule,
    MailModule,
    RegisterModule,
    TokenModule,
  ],
  providers: [AuthService, JwtStrategy, UserService, PrismaService],
  controllers: [AuthController],
  exports: [RegisterModule, TokenModule],
})
export class AuthModule {}
