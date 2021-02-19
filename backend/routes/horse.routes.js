const express = require('express');
const router = express.Router();

const horseCtrl = require('../controllers/horse.controller');

router.get('/', horseCtrl.getHorses);

module.exports = router;
