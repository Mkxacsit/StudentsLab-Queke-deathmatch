const express = require('express');
const { body } = require('express-validator');



let locationValidator = [

    body('name').notEmpty().isLength( {max : 50, min : 3} ),

    body('file').notEmpty().isInt().custom(value => {
        if(value < 0 )
            return false;

        return true;
    })
];

module.exports = locationValidator;