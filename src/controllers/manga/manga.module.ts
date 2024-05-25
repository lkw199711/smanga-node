/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:55:25
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:06:05
 * @FilePath: \smanga-node\src\controllers\manga\manga.module.ts
 */
import { Module } from '@nestjs/common';
import { MangaService } from '../../services/manga.service';
import { MangaController } from './manga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from 'src/entities/manga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manga])],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
