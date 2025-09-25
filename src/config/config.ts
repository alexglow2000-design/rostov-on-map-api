import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  nodeEnv: string;
  SECRET_KEY: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5000,
  DB_NAME: process.env.DB_NAME ?? 'db-sight',
  DB_USER: process.env.DB_USER ?? 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '123456',
  DB_HOST: process.env.DB_HOST ?? 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  SECRET_KEY: process.env.SECRET_KEY ?? 'secret-key',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};

export default config;
