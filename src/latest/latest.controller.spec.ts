import { Test, TestingModule } from '@nestjs/testing';
import { LatestController } from './latest.controller';
import { LatestService } from './latest.service';

describe('LatestController', () => {
  let controller: LatestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatestController],
      providers: [LatestService],
    }).compile();

    controller = module.get<LatestController>(LatestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
