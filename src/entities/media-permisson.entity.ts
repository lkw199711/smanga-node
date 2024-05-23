/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 19:06:59
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:49:41
 * @FilePath: \smanga-node\src\entities\media-permisson.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
