/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-25 15:08:21
 * @FilePath: \smanga-node\src\path\path.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PathService } from '../../services/path.service';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';
import { TaskService } from 'src/controllers/task/task.service';
import { Task } from 'src/entities/task.entity';
import { TaskPriority } from 'src/type';

@Controller('path')
export class PathController {
  constructor(
    private readonly pathService: PathService,
    private readonly taskService: TaskService,
  ) {}

  @Post()
  async create(@Body() body: any) {
    const createPathDto = body.data;
    // 插入记录,返回路径详情
    const result = await this.pathService.create(createPathDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    // 新增扫描任务
    this.taskService.create({
      taskName: 'scan',
      ptiority: TaskPriority.scan,
      command: 'task_scan',
      args: result,
      status: 'pending',
    });

    return response;
  }

  @Get()
  async findAll(@Query() query: any) {
    const listResponse = await this.pathService.findAll(
      query.page,
      query.pageSize,
      query.mediaId,
    );

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

  @Put('scan/:id')
  Scan(@Param('id') id: string) {
    // 新增扫描任务
    this.taskService.create({
      taskName: 'scan',
      ptiority: TaskPriority.scan,
      command: 'task_scan',
      args: { pathId: id },
      status: 'pending',
    });

    const response = new SResponse({
      code: 0,
      message: '扫描任务已提交'
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