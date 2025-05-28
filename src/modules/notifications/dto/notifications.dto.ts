import { ArrayNotEmpty, IsArray, IsEnum, IsInt } from 'class-validator';
import { RequestStatus } from '../../requests/request.dto';

export class MarkReadBulkDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  ids: number[];
}

export class CreateNotificationDto {
  @IsInt()
  userId: number;

  @IsInt()
  requestId: number;

  @IsEnum(RequestStatus)
  status: RequestStatus;
}
