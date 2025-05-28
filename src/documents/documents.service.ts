import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { constants } from 'fs';
import { S3Service } from './s3.service';

@Injectable()
export class DocumentsService {
  private readonly uploadDir = './uploads';
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async listFilesFromDb() {
    return this.prisma.document.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteFile(filename: string) {
    const filePath = path.join(this.uploadDir, filename);
    try {
      await this.s3Service.deleteFile(filename);
    } catch (err) {
      console.error('Ошибка при удалении файла из файловой системы:', err);
    }

    try {
      await this.prisma.document.delete({
        where: { filename },
      });
    } catch (err) {
      console.error('Ошибка при удалении записи из базы:', err);
    }

    return { success: true, message: 'Файл успешно удален' };
  }

  async createDocument(data: {
    filename: string;
    originalname: string;
    mimetype: string;
    size: number;
    url: string;
  }) {
    return this.prisma.document.create({
      data,
    });
  }
  async renameDocument(filename: string, newName: string) {
    const fileRecord = await this.findFileRecordByFilename(filename);
    if (!fileRecord) return null;

    const ext = path.extname(fileRecord.filename);
    const newFilename = `${newName.replace(/\s+/g, '_')}_${Date.now()}${ext}`;

    // Переименование в S3
    await this.s3Service.renameFileInS3(fileRecord.filename, newFilename);

    const newUrl = `https://${this.s3Service.bucketName}.storage.yandexcloud.net/${newFilename}`;

    // Обновляем запись в базе
    await this.prisma.document.update({
      where: { filename },
      data: {
        originalname: newName,
        filename: newFilename,
        url: newUrl,
      },
    });

    return {
      originalname: newName,
      filename: newFilename,
      url: newUrl,
    };
  }

  async findFileRecordByFilename(filename: string) {
    return this.prisma.document.findUnique({
      where: { filename },
    });
  }

  private async updateFileRecord(fileRecord: any) {
    return this.prisma.document.update({
      where: { filename: fileRecord.filename },
      data: {
        originalname: fileRecord.originalname,
        filename: fileRecord.filename,
        url: fileRecord.url,
      },
    });
  }
}
