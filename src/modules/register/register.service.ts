import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-register.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegisterService {
  // create() {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private readonly prisma: PrismaService) {}

  async registerUser(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        surname: dto.surname,
        name: dto.name,
        middle_name: dto.middle_name,
        email: dto.email,
        password: hashedPassword,
      },
    });
  }
}
