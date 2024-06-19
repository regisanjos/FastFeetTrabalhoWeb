const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class DeliverymanDAO {

  async create(name, phone, available) {
    const deliveryman = await prisma.deliveryman.create({
      data: {
        name,
        phone,
        available
      },
    });
    return deliveryman;
  }

  async getAll(){
    const allDelivery = await prisma.deliveryman.findMany({})
    return allDelivery;
}

  async findUnique( id ) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: { id },
    });
    return deliveryman;
  }

  async update( id, name, phone, available ) {
    const deliveryman = await prisma.deliveryman.update({
      where: { id },
      data: {
        name,
        phone,
        available,
      },
    });
    return deliveryman;
  }

  async delete( id ) {
    const deliveryman = await prisma.deliveryman.delete({
      where: { id },
    });
    return deliveryman;
  }
}

module.exports = DeliverymanDAO;