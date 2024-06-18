const express = require('express');
const DeliverymanController = require('../controllers/deliverymanController');
// Importe middlewares

const router = express.Router();


router.post('/', createDeliverymanValidation, DeliverymanController.create);
router.get('/',  , DeliverymanController.getAll);
router.get('/:id', ,DeliverymanController.getById);
router.put('/:id', ,DeliverymanController.update);
router.delete('/:id', , DeliverymanController.delete);


module.exports = router;