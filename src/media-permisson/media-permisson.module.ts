import { Module } from '@nestjs/common';
import { MediaPermissonService } from './media-permisson.service';
import { MediaPermissonController } from './media-permisson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaPermisson } from './entities/media-permisson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaPermisson])],
  controllers: [MediaPermissonController],
  providers: [MediaPermissonService],
})
export class MediaPermissonModule {}
