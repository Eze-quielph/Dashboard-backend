import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './user.service';

import { AuthGuard } from '../auth/guards/auth.guard';
import { UserInterface } from './interfaces/User';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll(
    @Query('onPage') onPage: string,
    @Query('page') page: string,
  ): Promise<{ users: UserInterface[]; totalCount: number | string }> {
    try {
      const { rows: users, count: totalCount } = await this.userService.findAll(
        onPage,
        page,
      );
      return { users, totalCount };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Ocurrió un error interno');
      }
    }
  }

  @Get('active/:id')
  async active(@Param('id') id: string) {
    try {
      const user = await this.userService.active(id);
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Ocurrió un error interno');
      }
    }
  }

  @Patch('premium/:id')
  async update(
    @Param('id') id: string,
    @Query('premium') premium: boolean,
  ): Promise<UserInterface> {
    try {
      const user = await this.userService.update(id, premium);
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Ocurrió un error interno');
      }
    }
  }

  @Delete(':id')
  async disable(@Param('id') id: string) {
    try {
      const userDelete = await this.userService.remove(id);
      return userDelete;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Ocurrió un error interno');
      }
    }
  }
}

/*
   if (error instanceof UserNotFoundException) {
    throw new NotFoundException(error.message);
  } else {
    throw new InternalServerErrorException('Ocurrió un error interno');
  }
*/
