/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 14:13:29
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 19:07:18
 * @FilePath: \smanga-node\src\collect\collect.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CollectService } from '../../services/collect.service';
import { CreateCollectDto } from './dto/create-collect.dto';
import { UpdateCollectDto } from './dto/update-collect.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('collect')
export class CollectController {
  constructor(private readonly collectService: CollectService) {}

  @Post()
  async create(@Body() createCollectDto: CreateCollectDto) {
    const result = await this.collectService.create(createCollectDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.collectService.findAll();
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
    const result = await this.collectService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCollectDto: UpdateCollectDto,
  ) {
    const result = await this.collectService.update(+id, updateCollectDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const request = await this.collectService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: request,
    });

    return response;
  }
}
