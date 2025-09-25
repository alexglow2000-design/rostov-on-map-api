"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT) || 5000,
    DB_NAME: process.env.DB_NAME ?? 'db-sight',
    DB_USER: process.env.DB_USER ?? 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '123456',
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: Number(process.env.DB_PORT) || 5432,
    SECRET_KEY: process.env.SECRET_KEY ?? 'secret-key',
    nodeEnv: process.env.NODE_ENV ?? 'development',
};
exports.default = config;
//# sourceMappingURL=config.js.map