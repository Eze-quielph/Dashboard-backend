import {
  Table,
  Column,
  PrimaryKey,
  Default,
  AllowNull,
  Unique,
  CreatedAt,
  DeletedAt,
  DataType,
  Model,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';
import { UpdatedAt } from 'sequelize-typescript/dist/model/column/timestamps/updated-at';
import { Song, UserSong } from 'src/modules/song/entities/song.entity';

@Table({ paranoid: true, tableName: 'Users' }) 
export class User extends Model {

  @BelongsToMany(()=> Song, ()=> UserSong)
  songs: Song[]

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  id: string;

  @AllowNull(false) 
  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [2, 20],
        msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
      },
    },
  })
  username: string;

  @AllowNull(false) 
  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [8, 25],
        msg: 'La longitud máxima permitida es de 25 caracteres y mínima de 8',
      },
    },
  })
  password: string;
  
  @Unique
  @AllowNull(false) 
  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [8, 25],
        msg: 'La longitud máxima permitida es de 25 caracteres y mínima de 8',
      },
    },
  })
  email: string;

  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  premium: boolean;

  @Column({ type: DataType.TEXT })
  image: string;

  @Column({ type: DataType.STRING })
  otpSecret: string;

  @Default(0)
  @Column({ type: DataType.INTEGER })
  otpCounter: number;

}
