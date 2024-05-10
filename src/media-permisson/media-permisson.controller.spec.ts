import { Test, TestingModule } from '@nestjs/testing';
import { MediaPermissonController } from './media-permisson.controller';
import { MediaPermissonService } from './media-permisson.service';

describe('MediaPermissonController', () => {
  let controller: MediaPermissonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaPermissonController],
      providers: [MediaPermissonService],
    }).compile();

    controller = module.get<MediaPermissonController>(MediaPermissonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
