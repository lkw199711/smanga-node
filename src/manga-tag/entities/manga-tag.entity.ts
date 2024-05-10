import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('manga-tag', ['mangaId', 'tagId'], { unique: true })
@Entity('manga-tag', { schema: 'smanga' })
export class MangaTag {
  @PrimaryGeneratedColumn({
    unsigned: true,
    comment: '漫画关联标签主键',
  })
  mangaTagId: number;

  @Column('int', { nullable: false, unsigned: true, comment: '漫画id' })
  mangaId: number;

  @Column('int', { nullable: false, unsigned: true, comment: '标签id' })
  tagId: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
