import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { ChapterService } from 'src/services/chapter.service';
import { CollectService } from 'src/services/collect.service';
import { CompressService } from 'src/services/compress.service';
import { UnzipService } from 'src/services/compress.service';
import { HistoryService } from 'src/services/history.service';
import { LatestService } from 'src/services/latest.service';
import { LogService } from 'src/services/log.service';
import { LoginService } from 'src/services/login.service';
import { MangaService } from 'src/services/manga.service';
import { MangaTagService } from 'src/services/manga-tag.service';
import { MediaService } from 'src/services/media.service';
import { MediaPermissonService } from 'src/services/media-permisson.service';
import { MetaService } from 'src/services/meta.service';
import { PathService } from 'src/services/path.service';
import { ScanService } from 'src/services/scan.service';
import { TagService } from 'src/services/tag.service';
import { TaskService } from 'src/controllers/task/task.service';
import { UserPermissonService } from 'src/services/user-permisson.service';
import { UserService } from 'src/services/user.service';
import { VersionService } from 'src/services/version.service';
import { TaskScheduler } from 'src/controllers/task/task.scheduler';

const entitiesDir = join(__dirname, '../entities');

@Module({
  imports: [
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
  ],
  providers: [
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
  ],
  exports: [
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
  ],
})
export class SqlModule {}
