/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 15:24:38
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 17:00:35
 * @FilePath: \smanga-node\src\main.ts
 * @Description: 项目入口文件
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 启用CORS
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
