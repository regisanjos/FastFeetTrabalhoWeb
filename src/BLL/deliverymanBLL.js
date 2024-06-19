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
            let deliveryman = null;
            
            id = parseInt(id)

            const validatedDeliveryman =  await deliverymanDao.findUnique( id );
            
            if(validatedDeliveryman == null || validatedDeliveryman == undefined )
            {
                throw("");
            }
            else
            {
               deliveryman = deliverymanDao.update( id, name, phone, available)
            };
            return deliveryman;
    
        } catch (error) {
            console.log(error);            
        }
    }

    async deleteDeliveryman(id) {
        try {
            let deliveryman = null;
            
            id = parseInt(id)

            const validatedDeliveryman =  await deliverymanDao.findUnique( id );
            
            if(validatedDeliveryman == null || validatedDeliveryman == undefined )
            {
                throw("");
            }
            else
            {
               deliveryman = deliverymanDao.delete( id)
            };
            return deliveryman;
    
        } catch (error) {
            console.log(error);            
        }
    }

    async getAll(){
        const allDelivery = deliverymanDao.getAll();
        return allDelivery;
    }
    
}

module.exports = new DeliverymanBLL();