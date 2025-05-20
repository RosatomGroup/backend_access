import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { TokenModule } from '../token/token.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, TokenModule, ConfigModule],
  controllers: [RegisterController],
  providers: [RegisterService, JwtService],
  exports: [RegisterService],
})
export class RegisterModule {}
