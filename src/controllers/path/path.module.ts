/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:04:10
 * @FilePath: \smanga-node\src\path\path.module.ts
 */
import { Module } from '@nestjs/common';
import { PathService } from '../../services/path.service';
import { PathController } from './path.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Path } from 'src/entities/path.entity';
import { Task } from 'src/entities/task.entity';
import { TaskFailed } from 'src/entities/task-failed.entity';
import { TaskSuccess } from 'src/entities/task-success.entity';
import { TaskService } from 'src/controllers/task/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Path, Task, TaskFailed, TaskSuccess])],
  controllers: [PathController],
  providers: [PathService, TaskService],
})
export class PathModule {}
