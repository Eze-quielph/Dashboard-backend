import { Injectable } from '@nestjs/common';
import { CreateUserAdmiDto } from './dto/create-user-admi.dto';
import { UpdateUserAdmiDto } from './dto/update-user-admi.dto';
import { UserAdmi } from './entities/user-admi.entity';
import * as bcrypt from "bcrypt"
import { UserReturn } from './interfaces/User-interface';

@Injectable()
export class UserAdmiService {
  async create(createUserAdmiDto: CreateUserAdmiDto): Promise<UserAdmi> {
    const saltRounds = 10
   try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(createUserAdmiDto.password, salt);
    const objectUser = {
      name: createUserAdmiDto.name,
      email: createUserAdmiDto.email,
      password: hashedPassword
    }

    const user = await UserAdmi.create(objectUser);
    return user;
   } catch (error) {
     console.warn(error)
    throw new Error('No se pudo crear el usuario');
   }
  }

  async login(loginUserAdmiDto : CreateUserAdmiDto): Promise<UserAdmi | void> {
    try {
      const user = await UserAdmi.findOne({where:{
        email: loginUserAdmiDto.email
      }})
      
      if(user){
        const password: string = loginUserAdmiDto.password
        const result = await bcrypt.compare(password, user.password)
        if(result) return user
      }
      throw new Error('No se pudo crear el usuario');  
    } catch (error) {
      throw new Error('No se pudo crear el usuario');
    }
  }

  async getUserById (id: string): Promise<UserReturn>{
    const user = await UserAdmi.findByPk(id)
    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }
}
