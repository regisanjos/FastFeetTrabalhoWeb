const DeliverymanDAO = require('../DAO/deliverymanDao');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deliverymanDao = new DeliverymanDAO();

class DeliverymanBLL {

    async createDeliveryman( name, phone, available) {
        try{
            
            const deliveryman = await deliverymanDao.create( name, phone, available);
            return deliveryman;    
        }catch(e){
            console.log(e)
        }
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
    async getAll(){
        const allDelivery = deliverymanDao.getAll();
        return allDelivery;
    }
    
}

module.exports = new DeliverymanBLL();