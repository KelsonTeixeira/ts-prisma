import prisma from '../prisma';

export default {
  execute: async (id: string) => {
    const user = await prisma.user.findUnique({
      where: { id }
    });

    if(!user) throw new Error('User not found');
    
    await prisma.user.delete({
      where: { id }
    });
  }
};