import { Injectable } from '@nestjs/common';
import { CreateVersionDto } from '../controllers/version/dto/create-version.dto';
import { UpdateVersionDto } from '../controllers/version/dto/update-version.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Version } from '../entities/version.entity';

@Injectable()
export class VersionService {
  constructor(
    @InjectRepository(Version)
    private readonly versionRepository: Repository<Version>,
  ) { }

  async create(createVersionDto: CreateVersionDto) {
    return await this.versionRepository.save(createVersionDto);
  }

  async findAll() {
    const list = await this.versionRepository.find();
    const count = await this.versionRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        versionId: id,
      },
    };

    return this.versionRepository.findOne(options);
  }

  async update(id: number, updateVersionDto: UpdateVersionDto) {
    return this.versionRepository.update(id, updateVersionDto);
  }

  async remove(id: number) {
    return this.versionRepository.delete(id);
  }
}
