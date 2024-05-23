/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 18:57:00
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:08:59
 * @FilePath: \smanga-node\src\chapter\chapter.module.ts
 */
import { Module } from '@nestjs/common';
import { ChapterService } from '../../services/chapter.service';
import { ChapterController, ImageListController } from './chapter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from 'src/entities/chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  controllers: [ChapterController, ImageListController],
  providers: [ChapterService],
})
export class ChapterModule {}
