import { Test, TestingModule } from '@nestjs/testing';
import { UserAdmiService } from './user-admi.service';

describe('UserAdmiService', () => {
  let service: UserAdmiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAdmiService],
    }).compile();

    service = module.get<UserAdmiService>(UserAdmiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
