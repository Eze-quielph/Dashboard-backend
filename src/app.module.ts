import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from "./config/database/database.module" 
import { UserAdmiModule } from './modules/user-admi/user-admi.module';
import { UserModule } from './modules/user/user.module';
import { SongModule } from './modules/song/song.module';
import { AuthModule } from './modules/auth/auth/auth.module';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule, UserAdmiModule, UserModule, SongModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
