import mongoose, {HydratedDocument} from 'mongoose';
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

export const updateUser = async (userID: string, {email, password}: {email?: string; password?: string}) => {
  const user: HydratedDocument<IUser> | null = await User.findOne({_id: userID});

  if (user) {
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }

    await user.save();

    return user;
  } else {
    return 'User not found';
  }
};

export const deleteUser = async (userID: string) => {
  const user = await User.deleteOne({_id: userID});
  return user;
};
