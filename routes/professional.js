const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professional');
const createController = require('../controllers/create');

router.get('/', professionalController.getData);
router.post('/', createController.createProfessional);

module.exports = router;