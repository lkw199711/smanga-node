/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-21 10:29:39
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-25 15:22:35
 * @FilePath: \smanga-node\src\task\task.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async getPendingTasks(): Promise<Task[]> {
    return this.taskRepository.find({
      where: { status: 'pending' },
      order: { priority: 'ASC' },
    });
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.taskRepository.delete(id);
  }
}
