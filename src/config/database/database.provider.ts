import { Sequelize } from 'sequelize-typescript';
import { Song, UserSong } from '../../modules/song/entities/song.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { UserAdmi } from 'src/modules/user-admi/entities/user-admi.entity';
import {
  host,
  port,
  username,
  password,
  database,
} from '../../constants/db-constants';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: "containers-us-west-117.railway.app",
        port: 7020,
        username: "postgres",
        password: "da6nDICJbWrDxp3hL3XY",
        database: "railway",
      });
      sequelize.addModels([Song, User, UserSong, UserAdmi]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
