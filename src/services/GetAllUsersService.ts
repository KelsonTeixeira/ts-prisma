import prisma from '../prisma';

export default {
  execute: async () => {
    const users = await prisma.user.findMany();

    return users;

  }
}