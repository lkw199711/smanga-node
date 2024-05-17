/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-07 11:32:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-08 18:30:20
 * @FilePath: \smanga-node\src\bookmark\bookmark.service.ts
 * @Description: 书签表服务
 */
import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { Repository, Like, FindOneOptions } from 'typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  create(createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarkRepository.save(createBookmarkDto);
  }

  async findAll(page: number, pageSize: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    };
    
    const list = await this.bookmarkRepository.find(page ? options : {});
    const count = await this.bookmarkRepository.count({
      where: {},
    });
    return {
      list,
      count,
    };
  }

  //options: FindOneOptions<Bookmark> : Promise<Bookmark | null>
  findOne(id: number) {
    const options: FindOneOptions<Bookmark> = {
      where: {
        bookmarkId: id,
      },
    };
    return this.bookmarkRepository.findOne(options);
  }

  update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
    return this.bookmarkRepository.update(id, updateBookmarkDto);
  }

  remove(bookmarkId: number) {
    return this.bookmarkRepository.delete(bookmarkId);
  }
}
