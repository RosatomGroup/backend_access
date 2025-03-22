import {ConflictException, Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/user.dto";
import {PrismaService} from "../prisma.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {
    }

    async getAllUsers() {
        return this.prisma.user.findMany();
    }

    async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this.findByEmail(createUserDto.email);

        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }
        const hashedPassword: string = await bcrypt.hash(createUserDto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                email: createUserDto.email,
                password: hashedPassword,
            },
        });
        return {message: 'User created successfully', createdUser: user.email};
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {email},
        });
    }
}
