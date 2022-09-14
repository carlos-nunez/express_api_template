import express from 'express';
import {
  createUserController,
  getAllUsersController,
  getUserByIDController,
  updateUserController,
  deleteUserController,
} from '../controllers/userController';
const router = express.Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIDController);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;
