const { Joi } = require("express-validation");

const createHorse = {
    body: Joi.object({
        name: Joi.string().required(),
        dob: Joi.date().optional().empty(''),
        gender: Joi.number().required(),
        pregnant: Joi.boolean().when('gender', { is: 2, then: Joi.required(), otherwise: Joi.optional().empty('') }),
        due_date: Joi.date().when('gender', { is: 2, then: Joi.when('pregnant', { is: 1, then: Joi.required(), otherwise: Joi.optional().empty('') }), otherwise: Joi.optional().empty('') })
    })
};

module.exports = { createHorse };