import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('oname', ['mediaId', 'mangaPath'], { unique: true })
@Entity('manga', { schema: 'smanga' })
export class Manga {
  @PrimaryGeneratedColumn({
    comment: '漫画id',
    unsigned: true,
  })
  mangaId: number;

  @Column('int', { unsigned: true, comment: '媒体库id' })
  mediaId: number;

  @Column('int', {
    nullable: false,
    unsigned: true,
    comment: '路径id',
  })
  pathId: number;

  @Column('varchar', { comment: '漫画名称' })
  mangaName: string;

  @Column('varchar', {
    comment: '漫画路径',
  })
  mangaPath: string;

  @Column('varchar', {
    nullable: true,
    comment: '父级目录',
  })
  parentPath: string | null;

  @Column('varchar', {
    nullable: true,
    comment: '漫画封面',
  })
  mangaCover: string | null;

  @Column('int', {
    nullable: true,
    unsigned: true,
    comment: '章节总数',
  })
  chapterCount: number | null;

  @Column('varchar', {
    comment: '浏览方式',
    default: () => "'flow'",
  })
  browseType: 'flow' | 'single' | 'double' | 'half';

  @Column('int', {
    unsigned: true,
    comment: '翻页方向 0 左到右; 1右到左',
    default: () => "'1'",
  })
  direction: number;

  @Column('int', {
    unsigned: true,
    comment: '剔除首页 01',
    default: () => "'0'",
  })
  removeFirst: number;

  @Column('varchar', {
    nullable: true,
    comment: '元数据标题',
  })
  title: string | null;

  @Column('varchar', {
    nullable: true,
    comment: '副标题 用于搜索',
  })
  subTitle: string | null;

  @Column('varchar', {
    nullable: true,
    comment: '作者',
  })
  author: string | null;

  @Column('varchar', {
    nullable: true,
    comment: '作品简介',
  })
  describe: string | null;

  @Column('date', { name: 'publishDate', nullable: true, comment: '发布日期' })
  publishDate: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
