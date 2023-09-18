import {
  Table,
  Column,
  AllowNull,
  PrimaryKey,
  Default,
  CreatedAt,
  DeletedAt,
  DataType,
  Model,
  Index,
  Unique
} from 'sequelize-typescript';
import { UpdatedAt } from 'sequelize-typescript/dist/model/column/timestamps/updated-at';

@Table({ paranoid: true })
export class UserAdmi extends Model{
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Index
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @Unique
  @AllowNull(false)
  @Index
  @Column(DataType.STRING)
  email: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [2, 20],
        msg: 'La longitud máxima permitida es de 20 caracteres y minima de 2',
      },
    },
  })
  name: string;
  
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [8, 3000],
        msg: 'La longitud máxima permitida es de 3000 caracteres y minima de 8',
      },
    },
  })
  password: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
