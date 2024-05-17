/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 17:56:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-17 16:47:13
 * @FilePath: \smanga-node\src\compress\compress.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateCompressDto } from './dto/create-compress.dto';
import { UpdateCompressDto } from './dto/update-compress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compress } from './entities/compress.entity';
import * as StreamZip from 'node-stream-zip';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CompressService {
  constructor(
    @InjectRepository(Compress)
    private readonly compressRepository: Repository<Compress>,
  ) {}
  async create(createCompressDto: CreateCompressDto) {
    return await this.compressRepository.save(createCompressDto);
  }

  async findAll(page: number, pageSize: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    };

    const list = await this.compressRepository.find(page ? options : {});
    const count = await this.compressRepository.count();
    
    return {
      list,
      count,
    };
  }

  findOne(id: number) {
    const options = {
      where: {
        compressId: id,
      },
    };

    return this.compressRepository.findOne(options);
  }

  update(id: number, updateCompressDto: UpdateCompressDto) {
    return this.compressRepository.update(id, updateCompressDto);
  }

  remove(id: number) {
    return this.compressRepository.delete(id);
  }
}

export class UnzipService {
  async unzip(zipFilePath: string, outputDir: string): Promise<void> {
    const zip = new StreamZip.async({ file: zipFilePath });

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
      // Extract the entire archive
      await zip.extract(null, outputDir);
      console.log(`Extracted to ${outputDir}`);
    } catch (err) {
      console.error('Error extracting ZIP file', err);
      throw err;
    } finally {
      await zip.close();
    }
  }
}