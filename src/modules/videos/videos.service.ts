import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { S3Service } from '../documents/s3.service';

@Injectable()
export class VideosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async createVideo(data: {
    filename: string;
    originalname: string;
    mimetype: string;
    size: number;
    url: string;
  }) {
    return this.prisma.video.create({ data });
  }

  async listVideos() {
    return this.prisma.video.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findVideoByFilename(filename: string) {
    return this.prisma.video.findUnique({
      where: { filename },
    });
  }

  async deleteVideo(filename: string) {
    await this.s3Service.deleteFile(filename);
    await this.prisma.video.delete({ where: { filename } });
    return { success: true, message: 'Видео удалено' };
  }

  async renameVideo(filename: string, newName: string) {
    const video = await this.findVideoByFilename(filename);
    if (!video) return null;

    const ext = path.extname(video.filename);
    const newFilename = `${newName.replace(/\s+/g, '_')}_${Date.now()}${ext}`;

    await this.s3Service.renameFileInS3(video.filename, newFilename);

    const newUrl = `https://${this.s3Service.bucketName}.storage.yandexcloud.net/${newFilename}`;

    await this.prisma.video.update({
      where: { filename },
      data: {
        filename: newFilename,
        originalname: newName,
        url: newUrl,
      },
    });

    return {
      filename: newFilename,
      originalname: newName,
      url: newUrl,
    };
  }
}
