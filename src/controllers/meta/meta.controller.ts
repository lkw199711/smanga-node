/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:44:31
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 19:09:41
 * @FilePath: \smanga-node\src\meta\meta.controller.ts
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetaService } from '../../services/meta.service';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';
import { SResponse, ListResponse } from 'src/interfaces/response.interface';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Post()
  async create(@Body() createMetaDto: CreateMetaDto) {
    const result = await this.metaService.create(createMetaDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.metaService.findAll();
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
    const result = await this.metaService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMetaDto: UpdateMetaDto) {
    const result = await this.metaService.update(+id, updateMetaDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.metaService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
