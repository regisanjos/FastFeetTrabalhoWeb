const DeliverymanBLL = require('../bll/deliverymanBLL');

class DeliverymanController {
    async create(request, response) {
        try {
            const deliveryman = await DeliverymanBLL.createDeliveryman(request.body);
            return response.status(201).json(deliveryman);
        } catch (error) {
            console.error('Error ao crear o deliveryman:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(request, response) {
        try {
            const { id } = request.params;
            const deliveryman = await DeliverymanBLL.updateDeliveryman(id, request.body);
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

    // Adicione aqui os métodos para as outras operações CRUD
}

module.exports = new DeliverymanController();