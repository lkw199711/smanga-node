/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 15:24:38
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-04 09:16:54
 * @FilePath: \smanga-node\src\app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DemoController } from './demo/demo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './sql/database.sqlite', // SQLite 数据库文件的路径
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 你的实体类路径
      synchronize: true, // 是否自动同步数据库结构，生产环境应该设为 false
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, CatsController, DemoController],
  providers: [AppService],
})
export class AppModule {}
