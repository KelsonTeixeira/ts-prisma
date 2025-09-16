import { Request, Response } from 'express';

import { schemaMiddleware } from '../middlewares/SchemaMiddleware';

import createUserService from '../../services/CreateUserService';
import getAllUsersService from '../../services/GetAllUsersService';
import DeleteUserService from '../../services/DeleteUserService';
import updateUserService from '../../services/UpdateUserService';

type User = {
  name: string;
  email: string;
}

export default {
  createUserController: [schemaMiddleware.validateBody, async (request: Request, response: Response) => {
    const { body } = request as { body: User };
    const userCreated = await createUserService.execute({ body });
    response.status(201).json(userCreated);
  }],

  getUserController: async (_request: Request, response: Response) => {
    const users = await getAllUsersService.execute();
    response.status(200).json(users);
  },

  updateUserController: [schemaMiddleware.validateBody, schemaMiddleware.validateParams, async (request: Request, response: Response) => {
    const { id } = request.params as { id: string };
    const { body } = request as { body: User };
    const userUpdated = await updateUserService.execute({ id, body });
    return response.status(200).json(userUpdated);
  }],
  
  deleteUserController: [schemaMiddleware.validateParams, async (request: Request, response: Response) => {
    const { id } = request.params as { id: string };
    await DeleteUserService.execute(id);
    return response.status(204).send();
  }]
};