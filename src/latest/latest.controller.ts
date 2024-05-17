/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 19:25:21
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 19:07:58
 * @FilePath: \smanga-node\src\latest\latest.controller.ts
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LatestService } from './latest.service';
import { CreateLatestDto } from './dto/create-latest.dto';
import { UpdateLatestDto } from './dto/update-latest.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('latest')
export class LatestController {
  constructor(private readonly latestService: LatestService) {}

  @Post()
  async create(@Body() createLatestDto: CreateLatestDto) {
    const result = await this.latestService.create(createLatestDto);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.latestService.findAll();
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
    const result = await this.latestService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLatestDto: UpdateLatestDto) {
    const result = await this.latestService.update(+id, updateLatestDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.latestService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
