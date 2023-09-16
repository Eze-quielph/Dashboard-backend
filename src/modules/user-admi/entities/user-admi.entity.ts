import {
  Table,
  Column,
  AllowNull,
  PrimaryKey,
  Default,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType
} from 'sequelize-typescript';

@Table({ paranoid: true })
export class UserAdmi {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [2, 20],
        msg: 'La longitud máxima permitida es de 20 caracteres y minima de 2',
      },
    },
  })
  @AllowNull
  name: string;

  @Column({
    type: DataType.STRING,
    validate: {
      len: {
        args: [8, 25],
        msg: 'La longitud máxima permitida es de 25 caracteres y minima de 8',
      },
    },
  })
  @AllowNull
  password: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
