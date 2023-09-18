import {
  Controller,
  Get,
  Body,
  Put,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { SongService } from './song.service';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  async getAll(@Query('onPage') onPage: string, @Query('page') page: string) {
    try {
      const users = await this.songService.findAll(onPage, page);
      if (users) {
        return users;
      } else {
        throw new HttpException(
          'Error en el controlador',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(
        `Error en el controlador: ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async active(@Param('id') id: string) {
    try {
      const result = await this.songService.active(id);
      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Ocurrió un error interno');
      }
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() song: UpdateSongDto) {
    try {
      console.log(song);
      
      const songUpdate = await this.songService.update(id, song);
      return songUpdate;
    } catch (error) {
      console.error('Error en el controlador:', error);
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Ocurrió un error interno');
      }
    }
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    try {
      const result = await this.songService.remove(id);
      if (result) {
        return result;
      } else {
        throw new HttpException(
          `Errror en el controlador`,
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(
        `Error en el controlador: ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
