import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('user-media', ['userId', 'mediaId'], { unique: true })
@Entity('media-permisson', { schema: 'smanga' })
export class MediaPermisson {
    @PrimaryGeneratedColumn({
        comment: '权限id',
        unsigned: true,
    })
    mediaPermissonId: number;
    
    @Column('int', {
        unsigned: true,
        comment: '用户id',
    })
    userId: number;
    
    @Column('int', {
        unsigned: true,
        comment: '媒体库id',
    })
    mediaId: number;
    
    @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
    createTime: Date;
    
    @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
    updateTime: Date;
}
