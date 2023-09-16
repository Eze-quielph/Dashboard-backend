import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAdmiService } from './user-admi.service';
import { CreateUserAdmiDto } from './dto/create-user-admi.dto';
import { UpdateUserAdmiDto } from './dto/update-user-admi.dto';

@Controller('user-admi')
export class UserAdmiController {
  constructor(private readonly userAdmiService: UserAdmiService) {}

  @Post()
  create(@Body() createUserAdmiDto: CreateUserAdmiDto) {
    return this.userAdmiService.create(createUserAdmiDto);
  }

  @Get()
  findAll() {
    return this.userAdmiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAdmiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAdmiDto: UpdateUserAdmiDto) {
    return this.userAdmiService.update(+id, updateUserAdmiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAdmiService.remove(+id);
  }
}
