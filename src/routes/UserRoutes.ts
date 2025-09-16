import express, { Router } from 'express';
import userController from '../interface/controllers/UsersController';

const router: Router = express.Router();

router.get('/', userController.getUserController);
router.post('/', userController.createUserController);
router.put('/:id', userController.updateUserController);
router.delete('/:id', userController.deleteUserController);

export default router;