import mongoose from 'mongoose';
import {IUser} from '../../types/IUser';

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model<IUser>('User', userSchema);
