const express = require('express');
const { body } = require('express-validator');



let sessionValidator = [

    body('locationId').notEmpty().isInt(),

    body('name').notEmpty().isLength( {max : 30, min : 3} ),

    body('maxUsers').notEmpty().isInt().custom((value) => {
        if(value > 25 )
            return false;
        return true;
    }),
];

module.exports = sessionValidator;