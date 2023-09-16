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
  } from 'sequelize-typescript';
  
  @Table({ paranoid: true, tableName: 'Song' }) 
  export class Song extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({ type: DataType.UUID })
    id: string;
  
    @Column({
      type: DataType.STRING,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    @AllowNull(false) 
    name: string;
  
    @Column({
      type: DataType.TEXT,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    @Unique 
    @AllowNull(false)
    song: string;
  
    @Column({
      type: DataType.STRING,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    @AllowNull(false) 
    description: string;
  
    @Column({
      type: DataType.STRING,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    @AllowNull(false) 
    artist: string;
  
    @Column({
      type: DataType.STRING,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    @AllowNull(false) 
    genre: string;
  
    @Column({
      type: DataType.TEXT,
      validate: {
        len: {
          args: [2, 20],
          msg: 'La longitud máxima permitida es de 20 caracteres y mínima de 2',
        },
      },
    })
    @AllowNull(false) 
    image: string;
  
    @Column({ type: DataType.BOOLEAN })
    @Default(true)
    isActive: boolean;
  
    @Column({ type: DataType.INTEGER })
    @Default(0)
    Points: number;
  
    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
  }
  