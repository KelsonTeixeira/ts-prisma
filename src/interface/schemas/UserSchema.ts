import Joi from 'joi';

const UserSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    status: Joi.boolean().strict().optional()
  }),

  params: Joi.object({
    id: Joi.string().required()
  })
}

export default UserSchema;

