/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 11:25:56
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:04:01
 * @FilePath: \smanga-node\src\controllers\scan\scan.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { ScanService } from '../../services/scan.service';
import { ScanController } from './scan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scan } from 'src/entities/scan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scan])],
  controllers: [ScanController],
  providers: [ScanService],
})
export class ScanModule {}
