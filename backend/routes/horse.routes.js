const express = require('express');
const router = express.Router();
const { validate } = require('express-validation')

const horseCtrl = require('../controllers/horse.controller');
const horseValidation = require('../validations/horse.validation');

router.get('/', horseCtrl.getHorses);
router.post('/create', validate(horseValidation.createHorse), horseCtrl.createHorse);

module.exports = router;
