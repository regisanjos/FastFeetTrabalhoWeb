const { Router } = require('express')
const DeliverymanController = require('../controllers/deliverymanController');
const RecipientController = require('../controllers/RecipientController');


const router = Router();


router.post('/deliverymen', DeliverymanController.create);
router.put('/deliverymen/:id', DeliverymanController.update);
router.delete('/deliverymen/:id', DeliverymanController.delete);
router.get('/deliverymen/', DeliverymanController.getAll);



router.post('/recipients', RecipientController.create);
router.put('/recipients/:id', RecipientController.update);
router.delete('/recipients/:id', RecipientController.delete);


module.exports = router;