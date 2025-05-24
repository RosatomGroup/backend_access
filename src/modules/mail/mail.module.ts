import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { UserService } from '../users/user.service';

@Module({
  providers: [MailService, UserService],
  exports: [MailService],
})
export class MailModule {}
