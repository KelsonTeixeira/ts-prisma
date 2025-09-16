import { Request, Response, NextFunction } from 'express';
import userSchema from '../schemas/UserSchema';

type User = {
  name: string;
  email: string;
  status?: boolean
};

export const schemaMiddleware = {
  validateBody: (request: Request, response: Response, next: NextFunction) => {
    const { body } = request as { body: User };
    const { error } = userSchema.body.validate(body);

    if (error) {
      return response.status(400).json({ error: error.details[0].message });
    }
    
    next();
  },

  validateParams: (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params as { id: string };
    const { error } = userSchema.params.validate({ id });

    if(error) {
      return response.status(400).json({ error });
    }

    next();
  }
};