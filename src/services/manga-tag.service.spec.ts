import { Test, TestingModule } from '@nestjs/testing';
import { MangaTagService } from './manga-tag.service';

describe('MangaTagService', () => {
  let service: MangaTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangaTagService],
    }).compile();

    service = module.get<MangaTagService>(MangaTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
