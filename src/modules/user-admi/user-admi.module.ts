import { Module } from '@nestjs/common';
import { UserAdmiService } from './user-admi.service';
import { UserAdmiController } from './user-admi.controller';

@Module({
  controllers: [UserAdmiController],
  providers: [UserAdmiService],
})
export class UserAdmiModule {}
