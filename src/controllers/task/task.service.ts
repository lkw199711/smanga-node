/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-21 10:29:39
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 20:35:26
 * @FilePath: \smanga-node\src\task\task.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';
import { TaskFailed } from 'src/entities/task-failed.entity';
import { TaskSuccess } from 'src/entities/task-success.entity';
import { PathService } from 'src/services/path.service';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(TaskFailed)
    private taskFailedRepository: Repository<TaskFailed>,

    @InjectRepository(TaskSuccess)
    private taskSuccessRepository: Repository<TaskSuccess>,

    private readonly pathService: PathService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async getPendingTasks(): Promise<Task[]> {
    return this.taskRepository.find({
      where: { status: 'pending' },
      order: { createTime: 'DESC' },
    });
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return await this.taskRepository.delete(id);
  }

  async processTask(task: Task) {
    task.status = 'in-progress';
    task.startTime = new Date();
    await this.taskRepository.save(task);
    try {
      switch (task.command) {
        case 'task_scan':
          await this.pathService.task_scan(task.args);
          break;
      }
      // const commandFunction = new Function('return ' + task.command)();
      // await commandFunction(task.args);

      task.status = 'completed';
      const successTask = task as TaskSuccess;
      await this.taskSuccessRepository.save(successTask);
    } catch (error) {
      task.status = 'failed';
      const failedTask = task as TaskFailed;
      task.error = error.stack;
      await this.taskFailedRepository.save(failedTask);
    }

    await this.taskRepository.delete(task.taskId);
  }
}
