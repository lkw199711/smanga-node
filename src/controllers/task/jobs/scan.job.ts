import { PathService } from 'src/services/path.service';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export class ScanJob {
  constructor(
    pathInfo,
    private readonly pathService: PathService,
  ) {
    this.handle(pathInfo);
  }

  async handle({ pathInfo }) {
    // 获取路径信息

    // 如果目录正在被扫描,则放弃本次扫描任务

    // 扫面任务开始

    // 是否扫面二级目录
    console.log(`扫描路径：${pathInfo.path}`);
    /*
      // 获取路径信息
      const { pathId, path } = pathInfo;
      // 获取路径下的文件列表
      const files = this.getFiles(path);
      // 获取路径下的文件夹列表
      const dirs = this.getDirs(path);
      // 获取路径下的文件夹列表
      const pathInfo = {
        pathId,
        path,
        files,
        dirs,
      };
      // 保存路径信息
      await this.pathService.update(pathId, pathInfo);
      */
  }

  getFiles(path) {
    const files = fs.readdirSync(path);
    return files.filter((file) => fs.statSync(path + '/' + file).isFile());
  }

  getDirs(path) {
    const dirs = fs.readdirSync(path);
    return dirs.filter((dir) => fs.statSync(path + '/' + dir).isDirectory());
  }
}
