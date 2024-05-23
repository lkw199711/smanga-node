/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-21 10:29:39
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:17:38
 * @FilePath: \smanga-node\src\task\task.module.ts
 */
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { TaskScheduler } from './task.scheduler';
import { TaskFailed } from 'src/entities/task-failed.entity';
import { TaskSuccess } from 'src/entities/task-success.entity';
import { SqlModule } from 'src/modules/sql.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Task, TaskFailed, TaskSuccess]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskScheduler],
  exports: [TaskService],
})
export class TaskModule {}
