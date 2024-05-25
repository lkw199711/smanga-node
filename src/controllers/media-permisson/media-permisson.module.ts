/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 19:06:59
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:05:45
 * @FilePath: \smanga-node\src\controllers\media-permisson\media-permisson.module.ts
 */
import { Module } from '@nestjs/common';
import { MediaPermissonService } from '../../services/media-permisson.service';
import { MediaPermissonController } from './media-permisson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaPermisson } from 'src/entities/media-permisson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaPermisson])],
  controllers: [MediaPermissonController],
  providers: [MediaPermissonService],
})
export class MediaPermissonModule {}
