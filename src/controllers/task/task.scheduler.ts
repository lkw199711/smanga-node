/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-21 16:02:02
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-21 19:10:46
 * @FilePath: \smanga-node\src\task\task.scheduler.ts
 */
// task.scheduler.ts
import { Injectable } from '@nestjs/common';
import { TaskService } from './task.service';
import { Interval } from '@nestjs/schedule';

// 引入需要执行的服务
import { ScanJob } from './jobs/scan.job';

const fs = require('fs');

@Injectable()
export class TaskScheduler {
  private processing = 0;
  private readonly maxConcurrentTasks = 10;

  constructor(private readonly taskService: TaskService) {}

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
      this.processTask(task);
    }
  }

  async processTask(task) {
    this.processing++;
    try {
      await this.taskService.processTask(task);
    } finally {
      this.processing--;
    }
  }
}
