import { Module } from '@nestjs/common';
import { UserAdmiModule } from 'src/modules/user-admi/user-admi.module';
import { UserController } from 'src/modules/user/user.controller';

@Module({
    imports: [UserAdmiModule],
    controllers:[UserController]
})
export class AuthModule {}
