const RecipientBLL = require('../bll/recipientBLL');

class RecipientController {
    async create(request, response) {
        try {
            const recipient = await RecipientBLL.createRecipient(request.body);
            return response.status(201).json(recipient);
        } catch (error) {
            console.error('Erro ao criar o destinatário:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(request, response) {
        try {
            const { id } = request.params;
            const recipient = await RecipientBLL.updateRecipient(id, request.body);
            return response.json(recipient);
        } catch (error) {
            console.error('Erro ao atualizar o destinatário:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await RecipientBLL.deleteRecipient(id);
            return response.status(204).send();
        } catch (error) {
            console.error('Erro ao excluir destinatário:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    
}

module.exports = new RecipientController();