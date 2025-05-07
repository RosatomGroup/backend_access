import { OwnRequestDto } from './request.dto';
import { PrismaService } from '../prisma/prisma.service';

export class RequestService {
  constructor(private readonly prisma: PrismaService) {
  }

  async getOwnRequests(userId: number): Promise<OwnRequestDto[]> {
    const requestDb = await this.prisma.request.findMany({
      where: { id: userId },
      include: {
        resource: true,
        role: true,
      },
    });

    return requestDb.map((request) =>
      ({
        id: request.id,
        requester: request.,
        createDate: Date,
        status: request.status,
        resourceName: request.resource.name,
        roleName: request.role.name,
      }));

  }
}
