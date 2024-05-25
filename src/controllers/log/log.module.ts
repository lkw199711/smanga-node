/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 19:25:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:07:32
 * @FilePath: \smanga-node\src\controllers\log\log.module.ts
 */
import { Module } from '@nestjs/common';
import { LogService } from '../../services/log.service';
import { LogController } from './log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from 'src/entities/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
