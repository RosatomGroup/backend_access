import { Module } from '@nestjs/common';
import { S3Service } from '../documents/s3.service';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';

@Module({
  controllers: [VideosController],
  providers: [VideosService, S3Service],
  exports: [VideosService, S3Service],
})
export class VideosModule {}
