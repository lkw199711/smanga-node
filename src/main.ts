/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 15:24:38
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-08 10:41:11
 * @FilePath: \smanga-node\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HttpExceptionFilter } from './filter/error.filter';  
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
