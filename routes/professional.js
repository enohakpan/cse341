const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professional');

router.get('/', professionalController.getAllData);

router.get('/:id', professionalController.getData);

module.exports = router;