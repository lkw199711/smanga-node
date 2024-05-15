/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 15:24:38
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-13 16:23:50
 * @FilePath: \smanga-node\src\app.module.ts
 * @Description:
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoModule } from './demo/demo.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { APP_FILTER } from '@nestjs/core';
import { DatabaseExceptionFilter } from './filter/database-exception.filter';
import { HttpExceptionFilter } from './filter/error.filter';
import { ChapterModule } from './chapter/chapter.module';
import { CollectModule } from './collect/collect.module';
import { CompressModule } from './compress/compress.module';
import { HistoryModule } from './history/history.module';
import { LogModule } from './log/log.module';
import { LoginModule } from './login/login.module';
import { MangaModule } from './manga/manga.module';
import { MangaTagModule } from './manga-tag/manga-tag.module';
import { MediaModule } from './media/media.module';
import { MetaModule } from './meta/meta.module';
import { PathModule } from './path/path.module';
import { ScanModule } from './scan/scan.module';
import { TagModule } from './tag/tag.module';
import { VersionModule } from './version/version.module';
import { UserModule } from './user/user.module';
import { UserPermissonModule } from './user-permisson/user-permisson.module';
import { MediaPermissonModule } from './media-permisson/media-permisson.module';
import { LatestModule } from './latest/latest.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ImageModule } from './image/image.module';

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
      charset: 'utf8mb4',
      // collation: 'utf8mb4_unicode_ci',
      autoLoadEntities: true,
      synchronize: true, // 是否自动同步数据库结构，生产环境应该设为 false
      retryDelay: 500,
      retryAttempts: 1,
    }),
    TypeOrmModule.forFeature([]),
    DemoModule,
    BookmarkModule,
    ChapterModule,
    CollectModule,
    CompressModule,
    HistoryModule,
    LogModule,
    LoginModule,
    MangaModule,
    MangaTagModule,
    MediaModule,
    MetaModule,
    PathModule,
    ScanModule,
    TagModule,
    VersionModule,
    UserModule,
    UserPermissonModule,
    MediaPermissonModule,
    LatestModule,
    ImageModule,
  ],
  controllers: [AppController],
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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*'); // 应用到所有路由
  }
}
