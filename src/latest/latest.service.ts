import { Injectable } from '@nestjs/common';
import { CreateLatestDto } from './dto/create-latest.dto';
import { UpdateLatestDto } from './dto/update-latest.dto';

@Injectable()
export class LatestService {
  create(createLatestDto: CreateLatestDto) {
    return 'This action adds a new latest';
  }

  findAll() {
    return `This action returns all latest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} latest`;
  }

  update(id: number, updateLatestDto: UpdateLatestDto) {
    return `This action updates a #${id} latest`;
  }

  remove(id: number) {
    return `This action removes a #${id} latest`;
  }
}
