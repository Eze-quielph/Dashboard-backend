import { Test, TestingModule } from '@nestjs/testing';
import { UserAdmiController } from './user-admi.controller';
import { UserAdmiService } from './user-admi.service';

describe('UserAdmiController', () => {
  let controller: UserAdmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAdmiController],
      providers: [UserAdmiService],
    }).compile();

    controller = module.get<UserAdmiController>(UserAdmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
