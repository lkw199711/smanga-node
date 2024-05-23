import { Module } from '@nestjs/common';
import { ImageService } from '../../services/image.service';
import { ImageController } from './image.controller';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
