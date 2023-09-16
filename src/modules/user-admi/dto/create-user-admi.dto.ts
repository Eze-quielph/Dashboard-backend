import { IsEmail, IsEmpty, IsString,  Length } from "class-validator"

export class CreateUserAdmiDto {
   
    @IsEmpty()
    @IsString()
    @Length( 2, 20, {message: 'La longitud máxima permitida es de 20 caracteres y minima de 2'})
    readonly name: string;
    
    @IsEmpty()
    @IsString()
    @IsEmail()
    @Length( 2, 20, {message: 'La longitud máxima permitida es de 20 caracteres y minima de 2'})
    readonly email: string;
    
    @IsEmpty()
    @IsString()
    @Length(8, 25, {message: 'La longitud máxima permitida es de 25 caracteres y minima de 8'})
    readonly password: string;
}
