/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 18:57:00
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-15 19:06:50
 * @FilePath: \smanga-node\src\chapter\chapter.controller.ts
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
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';
import * as fs from 'fs';
import * as path from 'path';
@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  async create(@Body() body: any) {
    const createChapterDto = body.data;
    const saveChapter = await this.chapterService.create(createChapterDto);
    const response = new SResponse({
      code: 0,
      message: '创建成功',
      data: saveChapter,
    });

    return response;
  }

  @Get()
  async findAll(@Query() query: any) {
    const listResponse = await this.chapterService.findAll(query.page, query.pageSize);
    const response = new ListResponse({
      code: 0,
      message: '',
      list: listResponse.list,
      count: listResponse.count,
    });

    return response;
  }

  @Get(':chapterId')
  async findOne(@Param('chapterId') chapterId: string) {
    const chapterTarget = await this.chapterService.findOne(+chapterId);
    const response = new SResponse({
      code: 0,
      message: '',
      data: chapterTarget,
    });

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    const updateChapterDto = body.data;
    const res = await this.chapterService.update(+id, updateChapterDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: res,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.chapterService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: res,
    });

    return response;
  }
}

@Controller('image-list')
export class ImageListController {
  constructor(private readonly chapterService: ChapterService) {}
  @Get(':chapterId')
  async findOne(@Param('chapterId') chapterId: string) {
    // 获取到章节信息
    const chapterTarget = await this.chapterService.findOne(+chapterId);

    if (!chapterTarget) {
      const response = new SResponse({
        code: 1,
        message: '未查询到该章节',
      });
      return response;
    }
    const chapterType = chapterTarget.chapterType;
    const chapterPath = chapterTarget.chapterPath;

    // 如果是解压类型 则解压文件

    // 非解压类型,返回图片列表
    //C:program-user\\10temp\\01chapter

    const dirEntries = fs.readdirSync(chapterPath);
    const images = dirEntries.map(item => {
      return chapterPath + '/' + item;
    })

    console.log(images);

    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: images,
    });

    return response;
  }
}
