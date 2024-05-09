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
  ) { }
  
  create(createChapterDto: CreateChapterDto) {
    return this.chapterRepository.save(createChapterDto);
  }

  async findAll() {
    const list = await this.chapterRepository.find({
      where: {},
      order: {
        chapterId: 'DESC',
      },
    });
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
