import {
    Table,
    Column,
    PrimaryKey,
    Default,
    AllowNull,
    Unique,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    DataType,
    Model,
    BelongsToMany,
    ForeignKey,
  } from 'sequelize-typescript';
import { User } from 'src/modules/user/entities/user.entity';
  
  @Table({ paranoid: true, tableName: 'Song' }) 
  export class Song extends Model {

    @BelongsToMany(() => User, () => UserSong)
    users: User[]; 
  
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
    name: string;
  
    @Unique 
    @AllowNull(false)
    @Column({
      type: DataType.TEXT,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    song: string;
  
    @AllowNull(false) 
    @Column({
      type: DataType.STRING,
      validate: {
        len: {
          args: [2, 2000],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    description: string;
  
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
    artist: string;
  
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
    genre: string;
    
    @AllowNull(false) 
    @Column({
      type: DataType.TEXT,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    image: string;
  
    @Default(true)
    @Column({ type: DataType.BOOLEAN })
    isActive: boolean;
  
    @Default(0)
    @Column({ type: DataType.INTEGER })
    Points: number;
  
  }
  
@Table({ paranoid: true, tableName: 'user_song' })
export class UserSong extends Model {
  @ForeignKey(() => User)
  @Column
  userId : number

  @ForeignKey(()=> Song)
  @Column
  songId : number
}