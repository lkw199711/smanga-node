import { Test, TestingModule } from '@nestjs/testing';
import { UserPermissonController } from './user-permisson.controller';
import { UserPermissonService } from '../../services/user-permisson.service';

describe('UserPermissonController', () => {
  let controller: UserPermissonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPermissonController],
      providers: [UserPermissonService],
    }).compile();

    controller = module.get<UserPermissonController>(UserPermissonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
