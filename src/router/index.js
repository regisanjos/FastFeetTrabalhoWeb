const { Router } = require('express')
const DeliverymanController = require('../controllers/deliverymanController');
const RecipientController = require('../controllers/RecipientController');


const router = Router();


router.post('/deliveryman', DeliverymanController.create);
router.put('/deliveryman/:id', DeliverymanController.update);
router.delete('/deliveryman/:id', DeliverymanController.delete);
router.get('/deliveryman/', DeliverymanController.getAll);



router.post('/recipients', RecipientController.create);
router.put('/recipients/:id', RecipientController.update);
router.delete('/recipients/:id', RecipientController.delete);


module.exports = router;