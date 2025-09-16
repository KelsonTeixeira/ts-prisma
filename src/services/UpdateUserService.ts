import prisma from '../prisma';

type User = {
  name?: string;
  email?: string;
}

type Params = {
  id: string;
  body: User
};

export default {
  execute: async (params: Params) => {
    const { id, body } = params;

    const user = await prisma.user.findUnique({
      where: { id }
    });

    if(!user) throw new Error('User not found');
    
    const userUpdated = await prisma.user.update({
      where: { id },
      data: body
    });
    return userUpdated;
  }
}