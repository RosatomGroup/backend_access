import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-register.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { TokenService } from '../token/token.service';

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(dto: RegisterDto) {
    const normalizedEmail = dto.email.toLowerCase().trim();

    const existingUser = await this.prisma.user.findUnique({
      where: { email: normalizedEmail },
    });
    if (existingUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        surname: dto.surname,
        name: dto.name,
        middle_name: dto.middle_name,
        email: normalizedEmail,
        password: hashedPassword,
      },
    });

    const tokens = await this.tokenService.generateTokens(
      user.id,
      user.email,
      false,
    );

    return {
      user,
      ...tokens,
    };
  }
}
