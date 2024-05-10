import { Module } from '@nestjs/common';
import { LatestService } from './latest.service';
import { LatestController } from './latest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Latest } from './entities/latest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Latest])],
  controllers: [LatestController],
  providers: [LatestService],
})
export class LatestModule {}
