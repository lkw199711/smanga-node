import { Test, TestingModule } from '@nestjs/testing';
import { MangaTagController } from './manga-tag.controller';
import { MangaTagService } from './manga-tag.service';

describe('MangaTagController', () => {
  let controller: MangaTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangaTagController],
      providers: [MangaTagService],
    }).compile();

    controller = module.get<MangaTagController>(MangaTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
