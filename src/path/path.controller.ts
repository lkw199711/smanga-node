/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-17 11:09:20
 * @FilePath: \smanga-node\src\path\path.controller.ts
 */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PathService } from './path.service';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('path')
export class PathController {
  constructor(private readonly pathService: PathService) {}

  @Post()
  async create(@Body() body: any) {
    const createPathDto = body.data;
    const result = await this.pathService.create(createPathDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll(@Query() query: any){
    const listResponse = await this.pathService.findAll(query.page, query.pageSize);
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
    const result = await this.pathService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePathDto: UpdatePathDto) {
    const result = await this.pathService.update(+id, updatePathDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.pathService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
