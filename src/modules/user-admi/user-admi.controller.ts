import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UserAdmiService } from './user-admi.service';
import { CreateUserAdmiDto } from './dto/create-user-admi.dto';
import { UpdateUserAdmiDto } from './dto/update-user-admi.dto';
import { enviroment } from '../../constants/desarrollo.constands';
import { AuthService } from '../auth/auth/auth.service';

@Controller('useradmi')
export class UserAdmiController {
  constructor(
    private readonly userAdmiService: UserAdmiService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async create(@Body() createUserAdmiDto: CreateUserAdmiDto) {
    try {
      const objectUser = {
        name: createUserAdmiDto.name,
        email: createUserAdmiDto.email,
        password: createUserAdmiDto.password,
      };
      const user = await this.userAdmiService.create(objectUser);
      const token = await this.authService.generateToken(user);
      return { token, user, message: 'Usuario creado exitosamente' };
    } catch (error) {
      throw new HttpException(
        'No se pudo crear el usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('login')
  async login(@Body() userAdmiDto: CreateUserAdmiDto) {
    if (enviroment) console.info('Me ejecute');
    try {
      const user = await this.userAdmiService.login(userAdmiDto);
      if (user) {
        if (enviroment) console.info(user);
        const token = await this.authService.generateToken(user);
        return { user, token, message: 'Usuario logueado exitosamente' };
      }
      throw new HttpException(
        'No se pudo loguear el usuario',
        HttpStatus.BAD_REQUEST,
      );
    } catch (error) {
      throw new HttpException(
        'No se pudo loguear el usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
