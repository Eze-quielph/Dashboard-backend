import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';

@Injectable()
export class SongService {
  async findAll(onPage: string, page: string): Promise<{ rows: Song[]; count: number }> {
    const pageNumber: number = parseInt(page, 10);
    const onPageNumber: number = parseInt(onPage, 10);

    const { rows, count } = await Song.findAndCountAll({
      limit: onPageNumber,
      offset: pageNumber,
    });

    return { rows, count };
  }

  async active(id: string) {
    try {
      const result = await Song.restore({ where: { id: id } });

      if (result !== null) {
        return result;
      } else {
        throw new NotFoundException(`Song con ID ${id} no encontrado`);
      }
    } catch (error) {
      throw new Error(
        `Ocurrió un error durante la activación del song: ${error.message}`,
      );
    }
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    try {
      const song = await Song.findByPk(id);
  
      if (!song) {
        throw new NotFoundException(`Canción con ID ${id} no encontrada`);
      }
  
      const updateData: Partial<UpdateSongDto> = { ...updateSongDto };
  
      console.log('Antes de la actualización:', updateData);
  
      await song.update(updateData);
  
      console.log('Después de la actualización:', song);
  
      return song;
    } catch (error) {
      console.error('Error en el servicio:', error.message);
      throw error;
    }
  }
  
  async remove(id: string) {
    const song = await Song.findByPk(id);

    if (!song) {
      throw new NotFoundException(`Canción con ID ${id} no encontrada`);
    }

    const deleteSong = await Song.destroy({
      where: {
        id: id,
      },
    });

    if (!deleteSong) {
      throw new NotFoundException(`Canción con ID ${id} no se pudo eliminar`);
    }

    return deleteSong;
  }
}