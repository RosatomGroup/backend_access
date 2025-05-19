import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
    ConflictException,
    Injectable,
  } from '@nestjs/common';
  import {
    CreateUserDto,
    ReplyCreateUserDto,
  } from '../dto/user.dto';
  
  import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class UserAuthService {
    constructor(
        private jwtService: JwtService,
        private readonly prisma: PrismaService
    ) { }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
          where: { email },
        });
      }

    async createUser(createUserDto: CreateUserDto): Promise<ReplyCreateUserDto> {
        const existingUser = await this.findByEmail(createUserDto.email);

        if (existingUser) {
            throw new ConflictException('Пользователь с таким email уже существует');
        }
        const hashedPassword: string = await bcrypt.hash(
            createUserDto.password,
            10,
        );
        const user = await this.prisma.user.create({
            data: {
                email: createUserDto.email,
                password: hashedPassword,
            },
        });
        const userReplyDto: ReplyCreateUserDto = {
            id: user.id,
            email: user.email,
        };

        return userReplyDto;
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.findByEmail(email);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}