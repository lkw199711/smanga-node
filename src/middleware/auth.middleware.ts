/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-13 16:03:02
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-15 15:19:51
 * @FilePath: \smanga-node\src\middleware\auth.middleware.ts
 */
// auth.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    // 排除登录和初始化接口
    if (/(login|init)/.test(req.originalUrl)) {
      return next();
    }

    // 检查是否存在 token
    const token = req.headers['token'];

    if (!token) {
      return res.status(401).json({ message: 'Token is required' });
    }

    // 在这里可以对 token 进行验证，比如解码、验证有效性等

    // 如果验证通过，将用户信息存储到请求对象中，以便后续处理
    req['user'] = {
      /* 用户信息 */
    };

    next();
  }
}
