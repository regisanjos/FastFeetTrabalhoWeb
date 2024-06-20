const express = require('express');
const RecipientController = require('../controllers/recipientController');


router.post('/recipients', RecipientController.create);
router.put('/recipients/:id', RecipientController.update);
router.delete('/recipients/:id', RecipientController.delete);
