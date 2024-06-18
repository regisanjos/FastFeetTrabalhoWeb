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

    async updateDeliveryman(id, name, phone, available) {
        try {
            const validatedDeliveryman =  deliverymanDao.findUnique( id );
            let deliveryman = null;
            if(validatedDeliveryman == null || validatedDeliveryman == undefined ){
                throw
            }else{
               deliveryman = deliverymanDao.update(name, phone, available)
            };
            return deliveryman;
    
        } catch (error) {
            console.log(error);            
        }
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