/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 14:13:29
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:08:21
 * @FilePath: \smanga-node\src\controllers\collect\collect.module.ts
 */
import { Module } from '@nestjs/common';
import { CollectService } from '../../services/collect.service';
import { CollectController } from './collect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collect } from 'src/entities/collect.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collect])],
  controllers: [CollectController],
  providers: [CollectService],
})
export class CollectModule {}
