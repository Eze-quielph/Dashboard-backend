import { Sequelize } from 'sequelize-typescript';
import { Song, UserSong } from '../../modules/song/entities/song.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { UserAdmi } from 'src/modules/user-admi/entities/user-admi.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.PORTDB) ,
        username: "postgres",
        password: process.env.PASSWORD ,
        database: process.env.DATABASE ,
      });
      sequelize.addModels([Song, User, UserSong, UserAdmi]);
      await sequelize.sync(force: true);
      return sequelize;
    },
  },
];
