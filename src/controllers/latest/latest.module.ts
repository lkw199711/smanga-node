/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 19:25:21
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:07:47
 * @FilePath: \smanga-node\src\controllers\latest\latest.module.ts
 */
import { Module } from '@nestjs/common';
import { LatestService } from '../../services/latest.service';
import { LatestController } from './latest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Latest } from 'src/entities/latest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Latest])],
  controllers: [LatestController],
  providers: [LatestService],
})
export class LatestModule {}
