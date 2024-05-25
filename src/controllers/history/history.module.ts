/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 18:40:43
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:07:59
 * @FilePath: \smanga-node\src\controllers\history\history.module.ts
 */
import { Module } from '@nestjs/common';
import { HistoryService } from '../../services/history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from 'src/entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
