import { Test, TestingModule } from '@nestjs/testing';
import { UserPermissonService } from './user-permisson.service';

describe('UserPermissonService', () => {
  let service: UserPermissonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPermissonService],
    }).compile();

    service = module.get<UserPermissonService>(UserPermissonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
