import {Request, Response} from 'express';
import {createUser} from '../services/userService';

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
