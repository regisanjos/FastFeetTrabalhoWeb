const express = require('express');
const RecipientController = require('../controllers/recipientController');


router.post('/', RecipientController.create);
router.put('/:id', RecipientController.update);
router.delete('/:id', RecipientController.delete);
