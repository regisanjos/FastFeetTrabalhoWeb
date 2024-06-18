const DeliverymanBLL = require('../BLL/deliverymanBLL');

class DeliverymanController {
    async create(request, response) {
        try {
            const { name, phone, available } = request.body;
            const deliveryman = await DeliverymanBLL.createDeliveryman( name, phone, available);
            return response.status(201).json(deliveryman);
        } catch (error) {
            console.error('Error ao crear o deliveryman:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(request, response) {
        try {
            const { id, name, phone, available } = request.params;
            const deliveryman = await DeliverymanBLL.updateDeliveryman(id,name, phone, available);
            return response.json(deliveryman);
        } catch (error) {
            console.error('Error ao atualizar o  deliveryman:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await DeliverymanBLL.deleteDeliveryman(id);
            return response.status(204).send();
        } catch (error) {
            console.error('Error ao deletar o deliveryman:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async getAll(_,response){
        try{
            var result = await DeliverymanBLL.getAll();
            return response.json(result);
        }
        catch (error)
        {
            console.error('Error ao deletar o deliveryman:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    // Adicione aqui os métodos para as outras operações CRUD
}

module.exports = new DeliverymanController();