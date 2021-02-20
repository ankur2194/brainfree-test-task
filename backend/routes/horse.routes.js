const express = require('express');
const router = express.Router();
const { validate } = require('express-validation')

const horseCtrl = require('../controllers/horse.controller');
const horseValidation = require('../validations/horse.validation');

router.get('/', horseCtrl.getHorses);
router.post('/create', validate(horseValidation.createHorse), horseCtrl.createHorse);
router.get('/:id', horseCtrl.getHorseById);
router.put('/:id/update', validate(horseValidation.updateHorse), horseCtrl.updateHorse);
router.delete('/:id/delete', horseCtrl.deleteHorse);

module.exports = router;
