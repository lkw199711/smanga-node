/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 18:57:00
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-15 16:28:42
 * @FilePath: \smanga-node\src\chapter\chapter.module.ts
 */
import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController, ImageListController } from './chapter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entities/chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  controllers: [ChapterController, ImageListController],
  providers: [ChapterService],
})
export class ChapterModule {}
