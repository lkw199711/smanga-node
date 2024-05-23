import { Injectable } from '@nestjs/common';
import { CreateScanDto } from '../controllers/scan/dto/create-scan.dto';
import { UpdateScanDto } from '../controllers/scan/dto/update-scan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scan } from '../entities/scan.entity';

@Injectable()
export class ScanService {
  constructor(
    @InjectRepository(Scan)
    private readonly scanRepository: Repository<Scan>,
  ) {}
  async create(createScanDto: CreateScanDto) {
    return this.scanRepository.save(createScanDto);
  }

  findAll() {
    return `This action returns all scan`;
  }

  async findOne(options: any) {
    return await this.scanRepository.findOne(options);
  }

  async update(id: number, updateScanDto: UpdateScanDto) {
    return await this.scanRepository.update(id, updateScanDto);
  }

  async remove(id: number) {
    return await this.scanRepository.delete(id);
  }
}
