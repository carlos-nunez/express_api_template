import './src/api/models/User';
import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import Logger from './src/util/logger';

//Routes
import userRoutes from './src/api/routes/userRoutes';

//App & Middlewares
const app: Express = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

// Database
mongoose.connect(process.env.MONGO_URI || '');
mongoose.connection.on('connected', () => Logger.mongoStatus(undefined));
mongoose.connection.on('err', (err) => Logger.mongoStatus(err));

app.get('/', (_: Request, res: Response) => {
  res.send(`Don't be Evil`);
});

app.listen(process.env.PORT, () => Logger.serverListening());
