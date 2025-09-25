import { Sequelize } from 'sequelize';
import config from './config/config';

const isProd = config.nodeEnv === 'production';

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'postgres',
    dialectOptions: isProd
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
  }
);

export default sequelize;
