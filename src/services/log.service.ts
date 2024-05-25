import { Injectable } from '@nestjs/common';
import { CreateLogDto } from '../controllers/log/dto/create-log.dto';
import { UpdateLogDto } from '../controllers/log/dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from '../entities/log.entity';
import { AppService } from 'src/app.service';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
    private readonly appService: AppService,
  ) {}

  async create(createLogDto: CreateLogDto) {
    const version = this.appService.get_version();
    const environment = this.appService.get_system();
    createLogDto.version = version;
    createLogDto.environment = environment;
    return await this.logRepository.save(createLogDto);
  }

  async findAll() {
    const list = await this.logRepository.find();
    const count = await this.logRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(options) {
    return await this.logRepository.findOne(options);
  }

  async update(id: number, updateLogDto: UpdateLogDto) {
    return await this.logRepository.update(id, updateLogDto);
  }

  async remove(id: number) {
    return await this.logRepository.delete(id);
  }
}
