import { Test, TestingModule } from '@nestjs/testing';
import { MediaPermissonService } from './media-permisson.service';

describe('MediaPermissonService', () => {
  let service: MediaPermissonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaPermissonService],
    }).compile();

    service = module.get<MediaPermissonService>(MediaPermissonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
