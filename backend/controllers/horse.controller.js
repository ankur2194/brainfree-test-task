const responder = require('../utils/responder');
const Horse = require('../models/horse.model');

const getHorses = async (req, res, next) => {
    try {
        const horses = await Horse.findAll({ order: [['id', 'ASC']] });
        res.json(responder.success(horses));
    } catch (err) {
        res.json(responder.error(err));
    }
};

const getHorseById = async (req, res, next) => {
    try {
        const horse = await Horse.findByPk(req.params.id);
        res.json(responder.success(horse));
    } catch (err) {
        res.json(responder.error(err));
    }
};

const createHorse = async (req, res, next) => {
    try {
        var horseData = {
            name: req.body.name,
            dob: req.body.dob ? req.body.dob : null,
            gender: req.body.gender,
            pregnant: req.body.gender === 2 ? req.body.pregnant : null,
            due_date: req.body.gender === 2 && req.body.pregnant === true ? req.body.due_date : null,
        };
        await Horse.create(horseData);
        res.json(responder.success(true));
    } catch (err) {
        res.json(responder.error(err));
    }
};

const updateHorse = async (req, res, next) => {
    try {
        var horseData = {
            name: req.body.name,
            dob: req.body.dob ? req.body.dob : null,
            gender: req.body.gender,
            pregnant: req.body.gender === 2 ? req.body.pregnant : null,
            due_date: req.body.gender === 2 && req.body.pregnant === true ? req.body.due_date : null,
        };
        const horse = await Horse.findByPk(req.params.id);
        horse.update(horseData);
        res.json(responder.success(true));
    } catch (err) {
        res.json(responder.error(err));
    }
};

const deleteHorse = async (req, res, next) => {
    try {
        const horse = await Horse.findByPk(req.params.id);
        horse.destroy();
        res.json(responder.success(true));
    } catch (err) {
        res.json(responder.error(err));
    }
};

module.exports = { getHorses, getHorseById, createHorse, updateHorse, deleteHorse };