const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professional');


router.get('/', professionalController.getAllData);

router.get('/:id', professionalController.getData);

router.post('/', professionalController.createData);

router.put('/:id', professionalController.updateData);

router.delete('/:id', professionalController.deleteData);

module.exports = router;
