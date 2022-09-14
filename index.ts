require('./src/models/SerialKey');
import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import Logger from './src/controllers/logger';

//Routes
const userRoutes = require('./src/routes/userRoutes');

//App & Middlewares
const app: Express = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(userRoutes);

// Database
mongoose.connect(process.env.MONGO_URI || '', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => Logger.mongoStatus(undefined));

mongoose.connection.on('err', (err) => Logger.mongoStatus(err));

app.get('/', (_: Request, res: Response) => {
  res.send(`Don't be Evil`);
});

app.listen(process.env.PORT, () => Logger.serverListening());
