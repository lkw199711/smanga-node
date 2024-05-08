import { Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException, BadGatewayException, ConflictException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (error instanceof NotFoundException) {
          // 自定义处理 Not Found 异常
          return throwError({ message: 'Not found', status: 404 });
        } else if (error instanceof BadGatewayException) {
          // 自定义处理 Bad Gateway 异常
          return throwError({ message: 'Bad Gateway', status: 502 });
        } else if (error instanceof ConflictException) {
          // 自定义处理 Conflict 异常
          return throwError({ message: 'Conflict', status: 409 });
        } else {
          // 其他异常默认处理
          return throwError({ message: 'Internal Server Error', status: 500 });
        }
      }),
    );
  }
}
