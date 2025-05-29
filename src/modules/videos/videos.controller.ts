import {
  BadRequestException,
  Body,
  Controller,
  Delete,
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
import { VideosService } from './videos.service';
import { Request, Response } from 'express';
import * as multer from 'multer';
import { S3Service } from '../documents/s3.service';
import { Readable } from 'stream';
import { GetObjectCommandOutput } from '@aws-sdk/client-s3';

@Controller('videos')
export class VideosController {
  constructor(
    private readonly videosService: VideosService,
    private readonly s3Service: S3Service,
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
      limits: { fileSize: 500 * 1024 * 1024 },
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.startsWith('video/')) {
          return callback(new Error('Разрешены только видеофайлы'), false);
        }
        callback(null, true);
      },
    }),
  )
  async uploadVideo(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    if (!file.buffer) throw new BadRequestException('Файл не загружен');

    const key = `${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;
    const url = await this.s3Service.uploadFile(
      file.buffer,
      key,
      file.mimetype,
    );

    const saved = await this.videosService.createVideo({
      filename: key,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      url,
    });

    return saved;
  }

  // @Get(':filename')
  // async getVideo(@Param('filename') filename: string, @Res() res: Response) {
  //   const video = await this.videosService.findVideoByFilename(filename);
  //   if (!video) throw new NotFoundException('Видео не найдено');
  //   return res.redirect(video.url);
  // }

  @Get(':filename')
  async streamVideo(@Param('filename') filename: string, @Res() res: Response) {
    const video = await this.videosService.findVideoByFilename(filename);
    if (!video) throw new NotFoundException('Видео не найдено');

    const s3Response = (await this.s3Service.getObjectWithMeta(
      video.filename,
    )) as GetObjectCommandOutput;
    const stream = s3Response.Body as Readable;

    res.set({
      // 'Content-Type': video.mimetype,
      'Content-Type': 'video/mp4',
      'Content-Disposition': 'inline',
      'Accept-Ranges': 'bytes',
    });

    if (s3Response.ContentLength) {
      res.setHeader('Content-Length', s3Response.ContentLength);
    }

    return stream.pipe(res);
  }

  @Get()
  async listVideos(@Req() req: Request) {
    const videos = await this.videosService.listVideos();
    return videos.map((video) => ({
      ...video,
      url: `${req.protocol}://${req.get('host')}/videos/${video.filename}`,
    }));
    // return videos;
  }

  @Delete(':filename')
  async deleteVideo(@Param('filename') filename: string) {
    return this.videosService.deleteVideo(filename);
  }

  @Patch(':filename/rename')
  async renameVideo(
    @Param('filename') filename: string,
    @Body('newName') newName: string,
  ) {
    if (!newName.trim()) {
      throw new BadRequestException('Новое имя не может быть пустым');
    }

    const updated = await this.videosService.renameVideo(
      filename,
      newName.trim(),
    );
    if (!updated) throw new NotFoundException('Видео не найдено');

    return updated;
  }
}
