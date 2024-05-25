/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:03:52
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:06:19
 * @FilePath: \smanga-node\src\manga-tag\manga-tag.module.ts
 */
import { Module } from '@nestjs/common';
import { MangaTagService } from '../../services/manga-tag.service';
import { MangaTagController } from './manga-tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaTag } from 'src/entities/manga-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MangaTag])],
  controllers: [MangaTagController],
  providers: [MangaTagService],
})
export class MangaTagModule {}
