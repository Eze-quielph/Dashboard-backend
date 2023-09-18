import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAdmi } from 'src/modules/user-admi/entities/user-admi.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}


  async generateToken(user: UserAdmi) {
    const payload = { sub: user.id, email: user.email }; 
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
