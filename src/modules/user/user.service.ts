import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  async findAll(onPage: string, page: string) {
    try {
      const user = await User.findAndCountAll({
        offset: +page,
        limit: +onPage,
      });
      if (!user) {
        throw new Error('No se pudo encontrar usuarios');
      }
      return user;
    } catch (error) {
      throw new Error(`Error en la búsqueda de usuarios: ${error.message}`);
    }
  }

  async active(id: string) {
    try {
      const result = await User.restore({ where: { id: id } });

      if (result !== null) {
        return result;
      } else {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }
    } catch (error) {
      throw new Error(
        `Ocurrió un error durante la activación del usuario: ${error.message}`,
      );
    }
  }

  async update(id: string, premium: boolean) {
    try {
      const user = await User.findByPk(id);
      if (user) {
        const userUpdate = await user.update({ premium: premium });
        if (userUpdate) {
          return userUpdate;
        }
        throw new NotFoundException('No se pudo actualizar al usuarios');
      }
      throw new NotFoundException('No se pudo encontrar usuarios');
    } catch (error) {
      throw new Error(
        `Ocurrió un error durante la activación del usuario: ${error.message}`,
      );
    }
  }

  async remove(id: string) {
    try {
      const userDisable = await User.destroy({
        where: {
          id: id,
        },
      });
      if (!userDisable) {
        return userDisable;
      } else {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
      }
    } catch (error) {
      throw new Error(
        `Ocurrió un error durante la eliminacion del usuario: ${error.message}`,
      );
    }
  }
}
