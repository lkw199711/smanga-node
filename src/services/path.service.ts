/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 20:53:18
 * @FilePath: \smanga-node\src\path\path.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreatePathDto } from '../controllers/path/dto/create-path.dto';
import { UpdatePathDto } from '../controllers/path/dto/update-path.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Path } from '../entities/path.entity';
import { ScanService } from './scan.service';

@Injectable()
export class PathService {
  constructor(
    @InjectRepository(Path)
    private readonly pathRepository: Repository<Path>,
    private readonly scanService: ScanService,
  ) {}

  async create(createPathDto: CreatePathDto) {
    return await this.pathRepository.save(createPathDto);
  }

  async findAll(page: number, pageSize: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    };
    const list = await this.pathRepository.find(page ? options : {});
    const count = await this.pathRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        pathId: id,
      },
    };

    return this.pathRepository.findOne(options);
  }

  async update(id: number, updatePathDto: UpdatePathDto) {
    return this.pathRepository.update(id, updatePathDto);
  }

  async remove(id: number) {
    return this.pathRepository.delete(id);
  }

  /**
   * @description: 扫描路径任务
   * @param {*} param1
   * @return {*}
   */
  async task_scan({ pathId, path }) {
    // 获取路径信息

    // 如果目录正在被扫描,则放弃本次扫描任务
    const scanRecord = this.scanService.findOne({
      where: { pathId: pathId },
    });

    if (scanRecord) {
      console.log(`路径${path}正在被扫描中，跳过本次扫描任务`);
      return;
    }

    // 扫面任务开始
    this.update(pathId, { lastScanTime: new Date() });
    this.scanService.create({
      scanStatus: 'start',
      path: path,
      pathId: pathId,
    });

    // 是否扫面二级目录
    console.log(`扫描路径：${path}`);

    function scan_start() {}
  }
}
