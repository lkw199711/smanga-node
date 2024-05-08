/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 15:24:38
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-08 10:52:00
 * @FilePath: \smanga-node\src\app.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DemoModule } from './demo/demo.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { APP_FILTER } from '@nestjs/core';
import { DatabaseExceptionFilter } from './filter/database-exception.filter';
import { HttpExceptionFilter } from './filter/error.filter';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: './sql/database.sqlite', // SQLite 数据库文件的路径
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'], // 你的实体类路径
    //   synchronize: true, // 是否自动同步数据库结构，生产环境应该设为 false
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '123qwe',
      host: 'localhost',
      port: 3306,
      database: 'smanga1',
      autoLoadEntities: true,
      synchronize: true, // 是否自动同步数据库结构，生产环境应该设为 false
      retryDelay: 500,
      retryAttempts: 1,
    }),
    TypeOrmModule.forFeature([User]),
    DemoModule,
    BookmarkModule,
  ],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: DatabaseExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
