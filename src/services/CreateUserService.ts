import prisma from '../prisma';

type User = {
  name: string;
  email: string;
}

type Params = {
  body: User;
};

export default {
  execute: async (params: Params) => {
    const { body } = params;

    const userCreated = await prisma.user.create({ data: body });

    return userCreated;
  }
};