const ExpressValidator = require('express-validator/check');

const Location = require('../models/location');


const { check } = ExpressValidator;


module.exports.validateContact = [
  check('location')
    .isString()
    .withMessage('location must be alphanumeric characters.')
    .isLength({ min: 3, max: 40 })
    .withMessage('location must be at least 3 characters long and not more than 40'),

  check('male')
    .isNumeric()
    .withMessage('totalMale must be a number'),

  check('female')
    .isNumeric()
    .withMessage('totalFemale must be a number')
];
