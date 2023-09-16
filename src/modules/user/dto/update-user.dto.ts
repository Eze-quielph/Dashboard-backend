import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmpty,
  IsEmail,
  Length,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmpty()
  @IsString()
  @Length(3, 15, { message: 'Longitud permitira entre 3 y 15' })
  readonly username?: string;

  @IsEmpty()
  @IsString()
  @Length(8, 15, { message: 'Longitud permitira entre 8 y 15' })
  readonly password?: string;

  @IsEmpty()
  @IsString()
  @IsEmail()
  @Length(8, 36, { message: 'Longitud permitira entre 8 y 36' })
  readonly email?: string;

  @IsEmpty()
  @IsBoolean()
  readonly premium?: boolean;

  @IsEmpty()
  @IsString()
  @Length(4, 100, { message: 'Minimo 4 caracteres, maximo 100 caracteres' })
  readonly image?: string;

  @IsEmpty()
  @IsString()
  readonly otpSecret?: string;

  @IsEmpty()
  @IsNumber()
  readonly otpCounter?: number;
}
