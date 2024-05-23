/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:05:07
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:05:34
 * @FilePath: \smanga-node\src\controllers\media\media.module.ts
 */
import { Module } from '@nestjs/common';
import { MediaService } from '../../services/media.service';
import { MediaController } from './media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
