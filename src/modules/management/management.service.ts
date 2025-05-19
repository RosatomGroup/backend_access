import { Injectable } from '@nestjs/common';
import { ManagementUserDto } from '../users/dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { user } from '../../../prisma/generated/client';

@Injectable()
export class ManagementService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<ManagementUserDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => this.mapUserToManagementDto(user));
  }

  private mapUserToManagementDto(user: user): ManagementUserDto {
    return {
      key: user.id,
      name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
      rang: user.rang,
      subdivision: user.subdivision,
      email: user.email,
    };
  }
}
