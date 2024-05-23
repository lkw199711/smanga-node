/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 11:38:55
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-17 16:25:14
 * @FilePath: \smanga-node\src\tag\tag.controller.ts
 */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TagService } from '../../services/tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() body: any) {
    const createTagDto = body.data;
    const result = await this.tagService.create(createTagDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll(@Query() query: any){
    const listResponse = await this.tagService.findAll(query.page, query.pageSize);
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
    const result = await this.tagService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const updateTagDto = body.data;
    const result = await this.tagService.update(+id, updateTagDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.tagService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
