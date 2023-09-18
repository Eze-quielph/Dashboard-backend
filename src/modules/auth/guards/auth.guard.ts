import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { PUBLIC_KEY } from 'src/constants/key-decorator';

import { useToken } from 'src/utils/use.token';
import { IUseToken } from '../auth/interfaces/auth.interfaces';
import { UserAdmiService } from 'src/modules/user-admi/user-admi.service';

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(
  private readonly useService: UserAdmiService,
  private readonly reflector: Reflector
 ){}
  async canActivate(
    context: ExecutionContext,
  )  {
    const isPublic = this.reflector.get<boolean>(
      PUBLIC_KEY,
      context.getHandler()
    )
    if(isPublic){
      return true
    }

    const req = context.switchToHttp().getRequest<Request>()

    const token = req.header('coder_token')

    if(!token || Array.isArray(token)){
      throw new UnauthorizedException("Invalid token")
    }

    const manageToken: IUseToken | string = useToken(token)

    if(typeof manageToken === "string"){
      throw new UnauthorizedException(manageToken)
    }

    if(manageToken.expire){
      throw new UnauthorizedException("Token expired")
    }

    const {id} = manageToken

    const user = await this.useService.getUserById(id)
    if(!user){
      throw new UnauthorizedException("Invalid User")
    }

    req.idUser = user.id
    req.emailUser = user.email
    return true;
  }
}
