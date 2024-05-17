/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-13 16:03:02
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 19:27:38
 * @FilePath: \smanga-node\src\middleware\auth.middleware.ts
 */
// auth.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenService } from 'src/login/login.service';
import { SResponse } from 'src/interfaces/response.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly token: TokenService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    // 排除登录和初始化接口
    if (/(login|init)/.test(req.originalUrl)) {
      return next();
    }

    // 检查是否存在 token
    const token = req.headers['token'];
    
    if (!token || token === 'null' || token === 'undefined') {
      return new SResponse({
        code: 1,
        message: 'Token is required',
      });
    }

    // 在这里可以对 token 进行验证，比如解码、验证有效性等
    const tokenIndo = await this.token.findOne({ token })
    if (!tokenIndo) {
      return new SResponse({
        code: 1,
        message: 'Token is invalid',
      });
    }

    // 如果验证通过，将用户信息存储到请求对象中，以便后续处理
    req['user'] = {
      /* 用户信息 */
      userId: tokenIndo.userId,
      token: tokenIndo.token,
    };

    next();
  }
}
