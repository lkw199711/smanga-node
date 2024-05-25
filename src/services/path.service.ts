/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-24 19:52:34
 * @FilePath: \smanga-node\src\path\path.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreatePathDto } from '../controllers/path/dto/create-path.dto';
import { UpdatePathDto } from '../controllers/path/dto/update-path.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Path } from '../entities/path.entity';
import { ScanService } from './scan.service';
import { LogService } from './log.service';
import { MangaService } from './manga.service';
import * as fs from 'fs';

@Injectable()
export class PathService {
  constructor(
    @InjectRepository(Path)
    private readonly pathRepository: Repository<Path>,
    private readonly scanService: ScanService,
    private readonly logService: LogService,
    private readonly mangaService: MangaService,
  ) {}

  async create(createPathDto: CreatePathDto) {
    return await this.pathRepository.save(createPathDto);
  }

  async findAll(page: number, pageSize: number, mediaId: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    } as any;

    if (mediaId) {
      options.where = { mediaId };
    }

    const list = await this.pathRepository.find(page ? options : {});
    const count = await this.pathRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        pathId: id,
      },
    };

    return this.pathRepository.findOne(options);
  }

  async update(id: number, updatePathDto: UpdatePathDto) {
    return this.pathRepository.update(id, updatePathDto);
  }

  async remove(id: number) {
    return this.pathRepository.delete(id);
  }
}
