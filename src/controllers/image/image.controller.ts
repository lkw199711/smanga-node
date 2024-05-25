/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-15 14:36:08
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-15 15:26:30
 * @FilePath: \smanga-node\src\image\image.controller.ts
 */
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { SResponse } from 'src/interfaces/response.interface';

@Controller('image')
export class ImageController {
  @Get()
  getImage(@Body('file') file: string, @Res() res: Response) {
    // 假设图片存储在public目录中
    console.log(file);

    // 检查文件是否存在
    if (!fs.existsSync(file) || !fs.lstatSync(file).isFile()) {
      return new SResponse({
        code: 1,
        message: '图片不存在',
      });
    }

    // 设置文件的MIME类型，这里假设你要返回JPEG图片
    const mimeType = 'image/jpeg';
    res.setHeader('Content-Type', mimeType);

    // 使用response.sendFile返回图片文件
    res.sendFile(file, (err) => {
      if (err) {
        return new SResponse({
          code: 1,
          message: '图片读取失败',
        });
      }
    });
  }
}
