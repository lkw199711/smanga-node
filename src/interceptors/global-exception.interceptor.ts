/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 10:23:57
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-08 10:31:28
 * @FilePath: \smanga-node\src\interceptors\global-exception.interceptor.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// global-exception.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GlobalExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        // 在此处对捕获到的异常进行处理
        console.error('Global exception:', error);

        return throwError({
          code: 1,
          message: '请求失败',
          error,
        }); // 继续抛出异常
      }),
    );
  }
}
