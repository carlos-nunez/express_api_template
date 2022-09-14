import mongoose from 'mongoose';
import {IUser} from '../../types/IUser';
const User = mongoose.model('User');

export const createUser = async (userData: IUser) => {
  const {email, password} = userData;
  const user = new User({email, password});
  await user.save();

  return user;
};
