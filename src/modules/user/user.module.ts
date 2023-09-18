import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserAdmiService } from '../user-admi/user-admi.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserAdmiService],
})
export class UserModule {}
