import mongoose from 'mongoose';
import {IUser} from '../../types/IUser';
const User = mongoose.model('User');

export const getUserByID = async (userID: string) => {
  const user = await User.findOne({_id: userID});
  return user;
};

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const createUser = async (userData: IUser) => {
  const {email, password} = userData;
  const user = new User({email, password});
  await user.save();
  return user;
};

export const updateUser = async (userID: string, userUpdate: {email?: string; password?: string}) => {
  const user = await User.updateOne({_id: userID, ...userUpdate});
  return user ?? null;
};

export const deleteUser = async (userID: string) => {
  const user = await User.deleteOne({_id: userID});
  return user;
};
