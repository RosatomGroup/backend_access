import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import { Request, Response } from 'express';
import * as multer from 'multer';
import { S3Service } from './s3.service';
import { CurrentUser } from './../auth/decorators/current-user.decorator';
import { JwtPayload } from './../auth/interfaces/jwt-payload.interface';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly s3Service: S3Service,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
      limits: { fileSize: 10 * 1024 * 1024 },
      fileFilter: (req, file, callback) => {
        if (
          !file.originalname.match(
            /\.(jpg|jpeg|png|gif|pdf|doc|docx|xls|xlsx)$/,
          )
        ) {
          return callback(
            new Error('Разрешены только изображения и документы'),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: JwtPayload,
    @Req() req: Request,
  ) {
    if (user.accessLevel !== 'ADMIN') {
      throw new ForbiddenException(
        'Только администратор может загружать файлы',
      );
    }
    if (!file.buffer) throw new Error('Файл не загружен');

    const key = `${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;

    const url = await this.s3Service.uploadFile(
      file.buffer,
      key,
      file.mimetype,
    );

    const saved = await this.documentsService.createDocument({
      filename: key,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      url,
    });
    return saved;
  }

  @Get(':filename')
  async getFile(@Param('filename') filename: string, @Res() res: Response) {
    const fileRecord =
      await this.documentsService.findFileRecordByFilename(filename);
    if (!fileRecord) {
      throw new NotFoundException('Файл не найден');
    }
    return res.redirect(fileRecord.url);
  }

  @Get()
  async listFiles(@Req() req: Request) {
    const files = await this.documentsService.listFilesFromDb();
    return files.map((file) => ({
      ...file,
      url: `${req.protocol}://${req.get('host')}/documents/${file.filename}`,
    }));
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':filename')
  async deleteFile(
    @Param('filename') filename: string,
    @CurrentUser() user: JwtPayload,
  ) {
    if (user.accessLevel !== 'ADMIN') {
      throw new ForbiddenException('Нет прав на удаление файла');
    }
    return this.documentsService.deleteFile(filename);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':filename/rename')
  async renameDocument(
    @Param('filename') filename: string,
    @Body('newName') newName: string,
    @CurrentUser() user: JwtPayload,
  ) {
    if (user.accessLevel !== 'ADMIN') {
      throw new ForbiddenException('Нет прав на переименования файла');
    }
    if (!newName || newName.trim() === '') {
      throw new BadRequestException('Новое имя файла не может быть пустым');
    }
    const updatedFile = await this.documentsService.renameDocument(
      filename,
      newName.trim(),
    );
    if (!updatedFile) {
      throw new NotFoundException('Файл не найден');
    }
    return updatedFile;
  }
}
