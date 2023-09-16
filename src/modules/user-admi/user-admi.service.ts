import { Injectable } from '@nestjs/common';
import { CreateUserAdmiDto } from './dto/create-user-admi.dto';
import { UpdateUserAdmiDto } from './dto/update-user-admi.dto';

@Injectable()
export class UserAdmiService {
  create(createUserAdmiDto: CreateUserAdmiDto) {
    return 'This action adds a new userAdmi';
  }

  findAll() {
    return `This action returns all userAdmi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAdmi`;
  }

  update(id: number, updateUserAdmiDto: UpdateUserAdmiDto) {
    return `This action updates a #${id} userAdmi`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAdmi`;
  }
}
