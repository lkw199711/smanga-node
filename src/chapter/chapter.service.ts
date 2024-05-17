/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 18:57:01
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-17 15:25:40
 * @FilePath: \smanga-node\src\chapter\chapter.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Repository, Like, FindOneOptions } from 'typeorm';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
  ) {}

  create(createChapterDto: CreateChapterDto) {
    return this.chapterRepository.save(createChapterDto);
  }

  async findAll(page: number, pageSize: number, mangaId: number = 0) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    };
    const list = await this.chapterRepository.find(page ? options : {});
    const count = await this.chapterRepository.count({
      where: {},
    });
    return {
      list,
      count,
    };
  }

  findOne(id: number) {
    const options: FindOneOptions<Chapter> = {
      where: {
        chapterId: id,
      },
    };

    return this.chapterRepository.findOne(options);
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    return this.chapterRepository.update(+id, updateChapterDto);
  }

  remove(id: number) {
    return this.chapterRepository.delete(id);
  }
}
