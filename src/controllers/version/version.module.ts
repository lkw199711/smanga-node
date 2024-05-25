/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 17:11:32
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:02:28
 * @FilePath: \smanga-node\src\controllers\version\version.module.ts
 */
import { Module } from '@nestjs/common';
import { VersionService } from '../../services/version.service';
import { VersionController } from './version.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Version } from 'src/entities/version.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Version])],
  controllers: [VersionController],
  providers: [VersionService],
})
export class VersionModule {}
