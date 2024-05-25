/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 18:40:43
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-11 14:22:24
 * @FilePath: \smanga-node\src\history\history.controller.ts
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryService } from '../../services/history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto) {
    const resquest = await this.historyService.create(createHistoryDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: resquest,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.historyService.findAll();
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
    const result = await this.historyService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHistoryDto: UpdateHistoryDto) {
    const result = await this.historyService.update(+id, updateHistoryDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.historyService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
