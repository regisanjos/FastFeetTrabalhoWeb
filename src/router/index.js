const { Router } = require('express')
const DeliverymanController = require('../controllers/deliverymanController');
const RecipientController = require('../controllers/RecipientController');
// Importe outros controladores conforme necessário

const router = Router();

// Rotas para Deliveryman
router.post('/deliverymen', DeliverymanController.create);
router.put('/deliverymen/:id', DeliverymanController.update);
router.delete('/deliverymen/:id', DeliverymanController.delete);
// Adicione outras rotas para deliverymen conforme necessário

// Rotas para Recipient
router.post('/recipients', RecipientController.create);
router.put('/recipients/:id', RecipientController.update);
router.delete('/recipients/:id', RecipientController.delete);
// Adicione outras rotas para recipients conforme necessário

// Exporte o router para ser usado no seu app.js ou server.js
module.exports = router;