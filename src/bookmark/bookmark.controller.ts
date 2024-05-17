/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-07 11:32:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 19:06:37
 * @FilePath: \smanga-node\src\bookmark\bookmark.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@Body() body: any) {
    const createBookmarkDto = body.data;
    const saveBookmark = await this.bookmarkService.create(createBookmarkDto);
    const response = new SResponse({
      code: 0,
      message: '创建成功',
      data: saveBookmark,
    });

    return response;
  }

  @Get()
  async findAll(@Query() query: any){
    const listResponse = await this.bookmarkService.findAll(query.page, query.pageSize);
    const response = new ListResponse({
      code: 0,
      message: '',
      list: listResponse.list,
      count: listResponse.count,
    });

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bookmarkTarget = await this.bookmarkService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: bookmarkTarget,
    });

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    const updateBookmarkDto = body.data;
    const res = await this.bookmarkService.update(+id, updateBookmarkDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: res,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.bookmarkService.remove(+id);
    return {
      code: 0,
      message: '删除成功',
      data: res,
    };
  }
}
