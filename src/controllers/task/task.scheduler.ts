/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-21 16:02:02
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-25 15:35:19
 * @FilePath: \smanga-node\src\task\task.scheduler.ts
 */
// task.scheduler.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskService } from './task.service';
import { Interval } from '@nestjs/schedule';
import { Task } from 'src/entities/task.entity';
import { TaskFailed } from 'src/entities/task-failed.entity';
import { TaskSuccess } from 'src/entities/task-success.entity';

const fs = require('fs');

// 引入需要执行的服务
import { ScanJob } from './jobs/scan.job';
import { ScanMangaJob } from './jobs/scan-manga.job';
import { dev_log } from 'src/utils';

@Injectable()
export class TaskScheduler {
  private processing = 0;
  private readonly maxConcurrentTasks = 10;

  constructor(
    private readonly taskService: TaskService,
    private readonly scanJob: ScanJob,
    private readonly scanMangaJob: ScanMangaJob,

    @InjectRepository(TaskFailed)
    private taskFailedRepository: Repository<TaskFailed>,

    @InjectRepository(TaskSuccess)
    private taskSuccessRepository: Repository<TaskSuccess>,
  ) {}

  @Interval(1000)
  async handleTaskQueue() {
    // console.log('handleTaskQueue')

    if (this.processing >= this.maxConcurrentTasks) {
      return;
    }

    const pendingTasks = await this.taskService.getPendingTasks();
    for (const task of pendingTasks) {
      if (this.processing >= this.maxConcurrentTasks) {
        break;
      }

      this.processing++;
      try {
        await this.processTask(task);
      } finally {
        this.processing--;
      }
    }
  }

  async processTask(task: Task) {
    task.status = 'in-progress';
    task.startTime = new Date();
    await this.taskService.update(task.taskId, task);
    try {
      switch (task.command) {
        case 'task_scan':
          await this.scanJob.handle(task.args);
          break;
        case 'task_scan_manga':
          await this.scanMangaJob.handle(task.args);
          break;
      }
      // const commandFunction = new Function('return ' + task.command)();
      // await commandFunction(task.args);

      task.status = 'completed';
      const successTask = task as TaskSuccess;
      await this.taskSuccessRepository.save(successTask);
    } catch (error) {
      dev_log(error);
      task.status = 'failed';
      const failedTask = task as TaskFailed;
      task.error = error.stack;
      await this.taskFailedRepository.save(failedTask);
    }
    await this.taskService.remove(task.taskId);
  }
}
