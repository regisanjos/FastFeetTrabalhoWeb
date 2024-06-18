const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserService {
  async create({ name, cpf, password, role }) {
    const user = await prisma.user.create({
      data: {
        name,
        cpf,
        password,
        role,
      },
    });
    return user;
  }

  async findUnique({ id }) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async update({ id, name, cpf, password, role }) {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        cpf,
        password,
        role,
      },
    });
    return user;
  }

  async delete({ id }) {
    const user = await prisma.user.delete({
      where: { id },
    });
    return user;
  }
}

module.exports = UserService;