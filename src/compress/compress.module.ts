import { Module } from '@nestjs/common';
import { CompressService } from './compress.service';
import { CompressController } from './compress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compress } from './entities/compress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compress])],
  controllers: [CompressController],
  providers: [CompressService],
})
export class CompressModule {}
