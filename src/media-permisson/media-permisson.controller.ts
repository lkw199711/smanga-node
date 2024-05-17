/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 19:06:59
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-13 10:56:55
 * @FilePath: \smanga-node\src\media-permisson\media-permisson.controller.ts
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediaPermissonService } from './media-permisson.service';
import { CreateMediaPermissonDto } from './dto/create-media-permisson.dto';
import { UpdateMediaPermissonDto } from './dto/update-media-permisson.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('media-permisson')
export class MediaPermissonController {
  constructor(private readonly mediaPermissonService: MediaPermissonService) {}

  @Post()
  async create(@Body() createMediaPermissonDto: CreateMediaPermissonDto) {
    const result = await this.mediaPermissonService.create(createMediaPermissonDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.mediaPermissonService.findAll();
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
    const result = await this.mediaPermissonService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMediaPermissonDto: UpdateMediaPermissonDto) {
    const result = await this.mediaPermissonService.update(+id, updateMediaPermissonDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.mediaPermissonService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
