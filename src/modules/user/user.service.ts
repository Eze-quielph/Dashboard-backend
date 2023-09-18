import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  async findAll(onPage: string, page: string) {
   try {
    const user = await User.findAndCountAll({
      offset:+onPage,
      limit: +page
    })
    return user
   } catch (error) {
    throw new Error(`Error en la búsqueda de usuarios: ${error.message}`);
   }
  }

  async active(id: string) {
    const user = await User.restore({where:{id:id}})
    return user
  }

  async update(id: string, premium: boolean) {
    const user = await User.findByPk(id)
    const userUpdate = await user.update({premium: premium})
    return userUpdate
  }

  async remove(id: string) {
    const userDisable = await User.destroy({
      where:{
        id: id
      }
    })
    return userDisable
  }
}
