/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 10:52:21
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-09 10:52:29
 * @FilePath: \smanga-node\src\filter\database-exception.filter.ts
 * @Description:
 */
// database-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch(QueryFailedError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 处理 TypeORM 的 QueryFailedError 异常
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: 1,
      message: '数据库错误',
      error: exception.message,
    });
  }
}
