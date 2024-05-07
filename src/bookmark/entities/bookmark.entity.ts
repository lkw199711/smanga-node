import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('opage', ['chapterId', 'page'], { unique: true })
@Entity('bookmark', { schema: 'smanga' })
export class Bookmark {
  @PrimaryGeneratedColumn()
  bookmarkId: number;

  @Column('int', { name: 'mediaId', nullable: false })
  mediaId: number;

  @Column('int', { name: 'mangaId', nullable: false })
  mangaId: number;

  @Column('int', { name: 'chapterId', nullable: false })
  chapterId: number;

  @Column('int', { name: 'userId', nullable: false })
  userId: number;

  @Column({ default: 'flow' })
  browseType: 'flow' | 'single' | 'double' | 'half';

  @Column('int', { name: 'page', nullable: false })
  page: number;

  @Column('varchar', { name: 'pageImage', nullable: true, length: 191 })
  pageImage: string | null;

  @CreateDateColumn({ type: 'datetime' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updateTime: Date;
}
