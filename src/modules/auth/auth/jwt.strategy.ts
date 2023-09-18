import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service'; 
import { UserAdmi } from 'src/modules/user-admi/entities/user-admi.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'pepe', 
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await UserAdmi.findOne({ where: { id: payload.sub, email: payload.email } });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
