const express = require('express');
const userService = require('../services/userService');
const responseHandler = require('../utils/responseHandler');


let userController = {

    getAllUsers : async function(req, res, next) {


        try {
            let users = await userService.getAllUser();
            
            console.log(users);

            responseHandler.sendSuccess(res, users, 200); 
            
        }
        catch(error) {
            next(error);
        }

    },


    addUser : async function(req, res, next) {
   
        let user = {
            login : req.body.login,
            password : req.body.password
        }

        try {
            let result = await userService.addUser(user, req.body.username);

            responseHandler.sendSuccess(res, result, 201);
        }
        catch(error) {
            next(error);
        }

    },

    deleteAccount : async function(req, res, next) {
 
        try {
            let user = await userService.deleteAccount(req.user.id);

            responseHandler.sendSuccess(res, user, 200);
        }
        catch(error) {
            next(error);
        }

    },

    getById: async function(req, res, next) {
    
        try {
            let user = await userService.getById(req.params.id)
            responseHandler.sendSuccess(res, user, 200);
        }
        catch(error) {
            next(error);
        }

      },


    updateUser: async function(req, res, next) {


        try {

            let data = {
                login : req.body.login,
                password : req.body.password
            }

            let user = await userService.updateUser(req.params.id, data);

            responseHandler.sendSuccess(res, user, 200);
        }
        catch(error) {
            next(error);
        }
    }


  
};
module.exports = userController;