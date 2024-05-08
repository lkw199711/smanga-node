/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-07 11:32:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-08 09:13:28
 * @FilePath: \smanga-node\src\bookmark\bookmark.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { Repository, Like } from 'typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  create(createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarkRepository.save(createBookmarkDto);
  }

  async findAll(){
    const list = await this.bookmarkRepository.find({
      where: {},
      order: {
        bookmarkId: 'DESC',
      }
    });
    const count = await this.bookmarkRepository.count({
      where: {},
    });
    return {
      list,
      count,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} bookmark`;
  }

  update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
    return this.bookmarkRepository.update(id, updateBookmarkDto);
  }

  remove(bookmarkId: number) {
    return throwError({ message: 'Internal Server Error', status: 302 });
    throw new NotFoundException(`Cat with id ${bookmarkId} not found`);
    return this.bookmarkRepository.delete(bookmarkId);
  }
}
