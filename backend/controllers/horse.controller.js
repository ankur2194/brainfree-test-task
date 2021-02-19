const responder = require('../utils/responder');
const Horse = require('../models/horse.model');

const getHorses = async (req, res, next) => {
    try {
        const horses = await Horse.findAll();
        res.json(responder.success(horses));
    } catch (err) {
        res.json(responder.error(err));
    }
};

module.exports = { getHorses };