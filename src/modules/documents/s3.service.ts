import { Injectable } from '@nestjs/common';
import {
  CopyObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  GetObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Readable } from 'stream';

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  readonly bucketName = process.env.YANDEX_BUCKET_NAME || '';

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.YANDEX_REGION,
      endpoint: 'https://storage.yandexcloud.net',
      credentials: {
        accessKeyId: process.env.YANDEX_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.YANDEX_SECRET_ACCESS_KEY || '',
      },
      forcePathStyle: true,
    });
  }

  async uploadFile(buffer: Buffer, key: string, mimetype: string) {
    const command = new PutObjectCommand({
      Bucket: process.env.YANDEX_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: mimetype,
      ACL: 'public-read',
      ContentDisposition: 'inline',
    });
    try {
      await this.s3Client.send(command);
    } catch (e) {
      console.error(e);
      throw e;
    }
    return `https://${this.bucketName}.storage.yandexcloud.net/${key}`;
  }

  async getFileStream(key: string): Promise<Readable> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    const response = await this.s3Client.send(command);
    return response.Body as Readable;
  }

  async getObjectWithMeta(key: string): Promise<GetObjectCommandOutput> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    return this.s3Client.send(command);
  }

  async deleteFile(key: string) {
    const command = new DeleteObjectCommand({
      Bucket: process.env.YANDEX_BUCKET_NAME,
      Key: key,
    });
    await this.s3Client.send(command);
  }

  async renameFileInS3(oldKey: string, newKey: string) {
    await this.s3Client.send(
      new CopyObjectCommand({
        Bucket: process.env.YANDEX_BUCKET_NAME,
        CopySource: encodeURIComponent(`${this.bucketName}/${oldKey}`),
        Key: newKey,
      }),
    );
    await this.deleteFile(oldKey);
  }
}
