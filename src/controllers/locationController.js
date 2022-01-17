const express = require('express');
const locationService = require('../services/locationService');
const responseHandler = require('../utils/responseHandler');


let locationController = {

    getAllLocations : async function(req, res, next) {

        try {

            let locations = await locationService.getAllLocations();
            
            console.log(locations);

            responseHandler.sendSuccess(res, locations, 200); 
            
        }
        catch(error) {
            next(error);
        }

    },


    addLocation : async function(req, res, next) {

        let location = {
            name : req.body.name,
            description : req.body.description ?? "no description",
            poster : req.body.poster || "no poster",
            file : req.body.file
        }

        try {
            let result = await locationService.addLocation(location);

            responseHandler.sendSuccess(res, result, 201);
        }
        catch(error) {
            next(error);
        }

    },

    deleteLocation : async function(req, res, next) {
  
        try {
            let location = await locationService.deleteLocation(req.params.id);

            responseHandler.sendSuccess(res, location, 200);
        }
        catch(error) {
            next(error);
        }

    },

    getById: async function(req, res, next) {
 
        try {
            let location = await locationService.getById(req.params.id)
            responseHandler.sendSuccess(res, location, 200);
        }
        catch(error) {
            next(error);
        }

      },


    updateLocation: async function(req, res, next) {


        try {

            let data = {
                name : req.body.name,
                description : req.body.description ?? "no description",
                poster : req.body.poster || "no poster",
                file : req.body.file
            }

            let location = await locationService.updateLocation(req.params.id, data);

            responseHandler.sendSuccess(res, location, 200);
        }
        catch(error) {
            next(error);
        }
    }


  
};
module.exports = locationController;