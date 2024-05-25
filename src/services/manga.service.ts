/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:55:25
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-17 14:51:45
 * @FilePath: \smanga-node\src\manga\manga.service.ts
 *
 */
import { Injectable } from '@nestjs/common';
import { CreateMangaDto } from '../controllers/manga/dto/create-manga.dto';
import { UpdateMangaDto } from '../controllers/manga/dto/update-manga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manga } from '../entities/manga.entity';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(Manga)
    private readonly mangaRepository: Repository<Manga>,
  ) {}

  async create(createMangaDto: CreateMangaDto) {
    return await this.mangaRepository.save(createMangaDto);
  }

  async findAll(page: number, pageSize: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    };
    const list = await this.mangaRepository.find(page ? options : {});
    const count = await this.mangaRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        mangaId: id,
      },
    };

    return this.mangaRepository.findOne(options);
  }

  async findByPath(pathId: number) {
    const options = {
      where: {
        pathId,
      },
    };

    return this.mangaRepository.find(options);
  }

  async update(id: number, updateMangaDto: UpdateMangaDto) {
    return this.mangaRepository.update(id, updateMangaDto);
  }

  async remove(id: number) {
    return this.mangaRepository.delete(id);
  }
}
