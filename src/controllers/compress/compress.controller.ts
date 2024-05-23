/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 17:56:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:45:40
 * @FilePath: \smanga-node\src\compress\compress.controller.ts
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
import { CompressService } from '../../services/compress.service';
import { CreateCompressDto } from './dto/create-compress.dto';
import { UpdateCompressDto } from './dto/update-compress.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';
import { UnzipService } from 'src/services/compress.service';

@Controller('compress')
export class CompressController {
  constructor(
    private readonly compressService: CompressService,
    private readonly unzipService: UnzipService,
  ) {}

  @Post()
  async create(@Body() body: any) {
    const createCompressDto = body.data;
    // const result = await this.unzipService.unzip(body.zipFilePath, body.outputDir);
    const result = await this.compressService.create(createCompressDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll(@Query() query: any){
    const listResponse = await this.compressService.findAll(query.page, query.pageSize);
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
    const result = await this.compressService.findOne(+id);
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
    @Body() updateCompressDto: UpdateCompressDto,
  ) {
    const result = await this.compressService.update(+id, updateCompressDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.compressService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
