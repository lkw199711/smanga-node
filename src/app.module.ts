/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 15:24:38
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-25 18:27:26
 * @FilePath: \smanga-node\src\app.module.ts
 * @Description:
 */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoModule } from './demo/demo.module';
import { APP_FILTER } from '@nestjs/core';
import { DatabaseExceptionFilter } from './filter/database-exception.filter';
import { HttpExceptionFilter } from './filter/error.filter';
import { AuthMiddleware } from './middleware/auth.middleware';
// 引入控制器
import { BookmarkController } from './controllers/bookmark/bookmark.controller';
import { ChapterController } from './controllers/chapter/chapter.controller';
import { CollectController } from './controllers/collect/collect.controller';
import { CompressController } from './controllers/compress/compress.controller';
import { HistoryController } from './controllers/history/history.controller';
import { LogController } from './controllers/log/log.controller';
import { LoginController } from './controllers/login/login.controller';
import { MangaController } from './controllers/manga/manga.controller';
import { MangaTagController } from './controllers/manga-tag/manga-tag.controller';
import { MediaController } from './controllers/media/media.controller';
import { MetaController } from './controllers/meta/meta.controller';
import { PathController } from './controllers/path/path.controller';
import { ScanController } from './controllers/scan/scan.controller';
import { TagController } from './controllers/tag/tag.controller';
import { UserController } from './controllers/user/user.controller';
import { UserPermissonController } from './controllers/user-permisson/user-permisson.controller';
import { MediaPermissonController } from './controllers/media-permisson/media-permisson.controller';
import { LatestController } from './controllers/latest/latest.controller';
import { ImageController } from './controllers/image/image.controller';
import { TaskController } from './controllers/task/task.controller';

// 引入实体
import { Bookmark } from 'src/entities/bookmark.entity';
import { Chapter } from 'src/entities/chapter.entity';
import { Collect } from 'src/entities/collect.entity';
import { Compress } from 'src/entities/compress.entity';
import { History } from 'src/entities/history.entity';
import { Latest } from 'src/entities/latest.entity';
import { Log } from 'src/entities/log.entity';
import { Login } from 'src/entities/login.entity';
import { Manga } from 'src/entities/manga.entity';
import { MangaTag } from 'src/entities/manga-tag.entity';
import { Media } from 'src/entities/media.entity';
import { MediaPermisson } from 'src/entities/media-permisson.entity';
import { Meta } from 'src/entities/meta.entity';
import { Path } from 'src/entities/path.entity';
import { Scan } from 'src/entities/scan.entity';
import { Tag } from 'src/entities/tag.entity';
import { Task } from 'src/entities/task.entity';
import { TaskFailed } from 'src/entities/task-failed.entity';
import { TaskSuccess } from 'src/entities/task-success.entity';
import { Token } from 'src/entities/token.entity';
import { User } from 'src/entities/user.entity';
import { UserPermisson } from 'src/entities/user-permisson.entity';
import { Version } from 'src/entities/version.entity';

// 引入服务
import { BookmarkService } from 'src/services/bookmark.service';
import { TokenService } from 'src/services/login.service';
import { ChapterService } from './services/chapter.service';
import { CollectService } from './services/collect.service';
import { CompressService } from './services/compress.service';
import { UnzipService } from 'src/services/compress.service';
import { HistoryService } from './services/history.service';
import { LatestService } from './services/latest.service';
import { LogService } from './services/log.service';
import { LoginService } from './services/login.service';
import { MangaService } from './services/manga.service';
import { MangaTagService } from './services/manga-tag.service';
import { MediaService } from './services/media.service';
import { MediaPermissonService } from './services/media-permisson.service';
import { MetaService } from './services/meta.service';
import { PathService } from './services/path.service';
import { ScanService } from './services/scan.service';
import { TagService } from './services/tag.service';
import { TaskService } from './controllers/task/task.service';
import { UserPermissonService } from './services/user-permisson.service';
import { UserService } from './services/user.service';
import { VersionService } from './services/version.service';
import { TaskScheduler } from './controllers/task/task.scheduler';
import { Utils } from './utils';
import * as path from 'path';

// 引入任务模块
import { ScheduleModule } from '@nestjs/schedule';
import { ScanJob } from './controllers/task/jobs/scan.job';
import { ScanMangaJob } from './controllers/task/jobs/scan-manga.job';

import { ConfigModule } from '@nestjs/config';
const getEnvFileName = () => {
  const RUNNING_ENV = process.env.RUNNING_ENV;
  console.log('RUNNING_ENV: ', RUNNING_ENV);
  return path.join(process.cwd(), `./config/env.${RUNNING_ENV}`);
};

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: './sql/database.sqlite', // SQLite 数据库文件的路径
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'], // 你的实体类路径
    //   synchronize: true, // 是否自动同步数据库结构，生产环境应该设为 false
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${getEnvFileName()}`,
    }),
    ScheduleModule.forRoot(),
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
    // 注册实体
    TypeOrmModule.forFeature([
      Bookmark,
      Chapter,
      Collect,
      Compress,
      History,
      Latest,
      Log,
      Login,
      Manga,
      MangaTag,
      Media,
      MediaPermisson,
      Meta,
      Path,
      Scan,
      Tag,
      Task,
      TaskFailed,
      TaskSuccess,
      Token,
      User,
      UserPermisson,
      Version,
    ]),
    DemoModule,
  ],
  controllers: [
    AppController,
    BookmarkController,
    ChapterController,
    CollectController,
    CompressController,
    HistoryController,
    LogController,
    LoginController,
    MangaController,
    MangaTagController,
    MediaController,
    MetaController,
    PathController,
    ScanController,
    TagController,
    UserController,
    UserPermissonController,
    MediaPermissonController,
    LatestController,
    ImageController,
    TaskController,
  ],
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
    BookmarkService,
    ChapterService,
    CollectService,
    CompressService,
    UnzipService,
    HistoryService,
    LatestService,
    LogService,
    LoginService,
    MangaService,
    MangaTagService,
    MediaService,
    MediaPermissonService,
    MetaService,
    PathService,
    ScanService,
    TagService,
    UserService,
    UserPermissonService,
    VersionService,
    TaskService,
    TokenService,
    TaskScheduler,
    ScanJob,
    ScanMangaJob,
    Utils,
  ],
  exports: [PathService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*'); // 应用到所有路由
  }
}
