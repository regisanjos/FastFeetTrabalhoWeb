const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class DeliverymanBLL {
    async createDeliveryman(data) {
        // lógica 
        const deliveryman = await prisma.deliveryman.create({ data });
        return deliveryman;
    }

    async updateDeliveryman(id, data) {
        // lógica
        const deliveryman = await prisma.deliveryman.update({
            where: { id },
            data,
        });
        return deliveryman;
    }

    async deleteDeliveryman(id) {
        // lógica
        const deliveryman = await prisma.deliveryman.delete({ where: { id } });
        return deliveryman;
    }

    
}

module.exports = new DeliverymanBLL();