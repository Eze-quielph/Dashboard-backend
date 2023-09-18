import { Module, forwardRef } from '@nestjs/common';
import { UserAdmiService } from './user-admi.service';
import { UserAdmiController } from './user-admi.controller';
import { AuthModule } from '../auth/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [UserAdmiController],
  providers: [UserAdmiService],
  exports: [UserAdmiService],
})
export class UserAdmiModule {}
