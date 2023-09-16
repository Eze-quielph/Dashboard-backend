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

@Table({ paranoid: true, tableName: 'Users' }) 
export class User extends Model {
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
  username: string;

  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [8, 25],
        msg: 'La longitud máxima permitida es de 25 caracteres y mínima de 8',
      },
    },
  })
  @AllowNull(false) 
  password: string;

  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [8, 25],
        msg: 'La longitud máxima permitida es de 25 caracteres y mínima de 8',
      },
    },
  })
  @Unique
  @AllowNull(false) 
  email: string;

  @Column({ type: DataType.BOOLEAN })
  @Default(false)
  premium: boolean;

  @Column({ type: DataType.TEXT })
  image: string;

  @Column({ type: DataType.STRING })
  otpSecret: string;

  @Column({ type: DataType.INTEGER })
  @Default(0)
  otpCounter: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
