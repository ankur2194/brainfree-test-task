const express = require('express');
const router = express.Router();
const horseRoutes = require('./horse.routes');

router.use('/horses', horseRoutes);

module.exports = router;
