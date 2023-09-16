import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import {
    IsEmpty,
    Length,
    IsString,
    IsBoolean,
    IsNumber
  } from 'class-validator';

export class UpdateSongDto extends PartialType(CreateSongDto) {

    @IsEmpty()
    @IsString()
    @Length(3, 15, { message: "El nombre solo permite de 3 a 15 caracteres" })
    readonly name: string
    
    @IsEmpty()
    @IsString()
    @Length(3, 100, { message: "El link song solo permite de 3 a 100 caracteres" })
    readonly song: string
    
    @IsEmpty()
    @IsString()
    @Length(10, 200, { message: "La descripcion solo permite de 15 a 200 caracteres" })
    readonly description: string
    
    @IsEmpty()
    @IsString()
    @Length(3, 15, { message: "El nombre del artista debe ser de entre 3 a 15" })
    readonly artist: string
    
    @IsEmpty()
    @IsString()
    @Length(3, 10, { message: "El genero puede contener entre 3 a 10 caracteres" })
    readonly genre: string
    
    @IsEmpty()
    @IsString()
    readonly image: string
    
    @IsEmpty()
    @IsBoolean()
    readonly isActive: boolean
    
    @IsEmpty()
    @IsNumber()
    readonly Points: number

}
