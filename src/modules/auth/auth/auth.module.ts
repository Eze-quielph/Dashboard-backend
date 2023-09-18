import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserAdmiModule } from 'src/modules/user-admi/user-admi.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports:[
    PassportModule,
    JwtModule.register({
      secret: "pepe",
      signOptions: { expiresIn: '24h'}
    }),
    forwardRef(() => UserAdmiModule), 
  ],
  providers: [JwtStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
