import { Module } from '@nestjs/common';
import { UserPermissonService } from './user-permisson.service';
import { UserPermissonController } from './user-permisson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPermisson } from './entities/user-permisson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPermisson])],
  controllers: [UserPermissonController],
  providers: [UserPermissonService],
})
export class UserPermissonModule {}
