const { Joi } = require("express-validation");

const createHorse = {
    body: Joi.object({
        name: Joi.string().required(),
        dob: Joi.date().optional().empty(null),
        gender: Joi.number().required(),
        pregnant: Joi.boolean().when('gender', { is: 2, then: Joi.required(), otherwise: Joi.optional().empty(null) }),
        due_date: Joi.date().when('gender', { is: 2, then: Joi.when('pregnant', { is: true, then: Joi.required(), otherwise: Joi.optional().empty(null) }), otherwise: Joi.optional().empty(null) })
    })
};

const updateHorse = {
    body: Joi.object({
        name: Joi.string().required(),
        dob: Joi.date().optional().empty(null),
        gender: Joi.number().required(),
        pregnant: Joi.boolean().when('gender', { is: 2, then: Joi.required(), otherwise: Joi.optional().empty(null) }),
        due_date: Joi.date().when('gender', { is: 2, then: Joi.when('pregnant', { is: true, then: Joi.required(), otherwise: Joi.optional().empty(null) }), otherwise: Joi.optional().empty(null) })
    })
};

module.exports = { createHorse, updateHorse };