const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class RecipientBLL {
    async createRecipient(data) {
        // lógica  destinatário
        const recipient = await prisma.recipient.create({ data });
        return recipient;
    }

    async updateRecipient(id, data) {
        // logica
        const recipient = await prisma.recipient.update({
            where: { id },
            data,
        });
        return recipient;
    }

    async deleteRecipient(id) {
        //logica
        const recipient = await prisma.recipient.delete({ where: { id } });
        return recipient;
    }

   
}

module.exports = new RecipientBLL();