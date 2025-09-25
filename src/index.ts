import express from "express";
import routes from './routes/index'
import { errorHandler } from "./middlewares/errorHandler";
import cors from 'cors'
import path from "path";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', routes);
app.use(errorHandler);

export default app;