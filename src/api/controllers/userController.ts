import {Request, Response} from 'express';
import {getUserByID, getAllUsers, createUser, updateUser, deleteUser} from '../services/userService';

export const getUserByIDController = async (req: Request, res: Response) => {
  try {
    const user = await getUserByID(req.params.id);
    if (user) {
      res.send({user});
    } else {
      res.status(422).send({error: 'User not found'});
    }
  } catch (error) {
    res.status(422).send({error});
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.send({users});
  } catch (error) {
    res.status(422).send({error});
  }
};

export const createUserController = async (req: Request, res: Response) => {
  const {email, password} = req.body;

  if (email && password) {
    try {
      const user = await createUser({email, password});
      res.send({user});
    } catch (error) {
      res.status(422).send({error});
    }
  } else {
    res.status(422).send({error: 'Invalid email or password'});
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  if (req.params.id && (req.body.email || req.body.password)) {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.send({user});
    } catch (error) {
      res.status(422).send({error});
    }
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  if (req.body.userID) {
    try {
      const user = await deleteUser(req.body.userID);
      res.send({user});
    } catch (error) {
      res.status(422).send({error});
    }
  }
};
