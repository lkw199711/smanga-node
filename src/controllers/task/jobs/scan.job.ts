/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-23 19:56:11
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-25 18:52:14
 * @FilePath: \smanga-node\src\controllers\task\jobs\scan.job.ts
 */
import { Injectable } from '@nestjs/common';
import { ScanService } from 'src/services/scan.service';
import { LogService } from 'src/services/log.service';
import { MangaService } from 'src/services/manga.service';
import { TaskService } from 'src/controllers/task/task.service';
import { PathService } from 'src/services/path.service';
import { dev_log } from 'src/utils';
import * as fs from 'fs';
import * as path from 'path';
import { TaskPriority } from 'src/type';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Path } from 'src/entities/path.entity';
import { Media } from 'src/entities/media.entity';

@Injectable()
export class ScanJob {
  constructor(
    private readonly scanService: ScanService,
    private readonly logService: LogService,
    private readonly mangaService: MangaService,
    private readonly taskService: TaskService,
    private readonly pathService: PathService,

    @InjectRepository(Path)
    private readonly pathRepository: Repository<Path>,

    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,

    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async handle({ pathId, pathContent, directoryFormat, include, exclude }) {
    const res = await this.dataSource.manager
      // .getRepository(Path)
      // .getRepository(Media)
      .createQueryBuilder()
      .innerJoinAndSelect(Media, 'media', 'path.mediaId = media.mediaId')
      // .innerJoinAndSelect('path.media', 'media')
      // .innerJoinAndSelect(Path, 'path', 'media.mediaId = path.mediaId')
      .select(['path.*', 'media.*'])
      .where('path.pathId = :pathId', { pathId })
      // .getSql();
      .getMany();
    dev_log(res);
    return false;
    // 获取路径信息
    if (!pathContent) {
      const res = await this.pathService.findOne(pathId);
      ({ pathContent } = res);
    }

    // 如果目录正在被扫描,则放弃本次扫描任务
    const scanRecord = await this.scanService.findOne({
      where: { pathId: pathId },
    });

    if (scanRecord) {
      this.logService.create({
        logLevel: 0,
        module: 'path',
        queue: 'scan',
        message: `路径${pathContent}正在被扫描中，跳过本次扫描任务`,
      });
      dev_log(`路径${pathContent}正在被扫描中，跳过本次扫描任务`);
      return;
    }

    // 记录扫面任务开始
    this.pathService.update(pathId, { lastScanTime: new Date() });
    this.scanService.create({
      scanStatus: 'start',
      pathContent: pathContent,
      pathId: pathId,
    });

    let mangaList = [];
    let mangaListSql = [];
    // 是否扫面二级目录
    if (directoryFormat) {
      mangaList = this.scan_path_parent(pathContent, include, exclude);
    } else {
      mangaList = this.scan_path(pathContent, include, exclude);
    }

    console.log(mangaList);

    // 获取当前路径下已经存在的漫画
    mangaListSql = await this.mangaService.findByPath(pathId);

    if (mangaList.length < mangaListSql.length) {
      // 现存漫画少于库中漫画, 说明删除了文件. 不进行新增,只删除库中的记录
    } else if (mangaList.length == 0) {
      // 如果为空目录 则直接结束扫描
      dev_log(
        `路径 ${pathContent} 没有检测到漫画，请确认漫画文件存在以及媒体库设置!`,
      );
    } else {
      // 目录中漫画数量多余库中, 说明新增了文件. 进行新增操作
      // 进行漫画扫描任务添加
      this.taskService.create({
        taskName: 'scan',
        prioity: TaskPriority.scan,
        command: 'task_scan_manga',
        args: {
          pathContent: pathContent,
          mangaList: mangaList,
          pathId: pathId,
          mangaCount: mangaList.length,
        },
      });
    }
    dev_log(`扫描路径：${pathContent}`);

    function scan_start() {}
    function scan_end() {}
  }

  scan_path_parent(parentPath: string, include: string, exclude: string) {
    let mangaList = [];
    let folderList = fs.readdirSync(parentPath);
    folderList = folderList.filter((item) => {
      const itemPath = path.join(parentPath, item);

      // 检查是否为文件夹
      if (!fs.statSync(itemPath).isDirectory()) {
        return false;
      }

      // 排除元数据文件夹
      if (/smanga-info/.test(itemPath)) {
        return false;
      }

      // 包含匹配
      if (include) {
        return new RegExp(include).test(itemPath);
      }

      // 排除匹配
      if (exclude) {
        return !new RegExp(exclude).test(itemPath);
      }

      return true;
    });

    folderList.map((item) => {
      const itemPath = path.join(parentPath, item);
      mangaList = mangaList.concat(this.scan_path(itemPath, include, exclude));
    });

    return mangaList;
  }

  scan_path(dir: string, include: string, exclude: string) {
    let mangaList = fs.readdirSync(dir);
    mangaList = mangaList.filter((item) => {
      const itemPath = path.join(dir, item);

      // 排除元数据文件夹
      if (/smanga-info/.test(itemPath)) {
        return false;
      }

      // 包含匹配
      if (include) {
        return new RegExp(include).test(item);
      }

      // 排除匹配
      if (exclude) {
        return !new RegExp(exclude).test(item);
      }

      return true;
    });

    return mangaList;
  }
}
