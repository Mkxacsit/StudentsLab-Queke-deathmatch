const express = require('express');
const locationRepository = require('../repository/locationRepository');
const buildError = require('../utils/buildError');

module.exports = locationService = {

    getById : async function(locationId) {

         let location = await locationRepository.getById(locationId);

         if(!location)
            throw(buildError(400, 'no such location'));

         return location;
    },

    getAllLocations : async function() {
        
        return await locationRepository.getAllLocations();
        
    },

    addLocation : async function(instance) {
        return await locationRepository.addLocation(instance);
    },

    deleteLocation : async function(locationId) {

        let location = await locationRepository.getById(locationId);
    
        if(!location)
            throw(buildError(400, 'no such location'));

        return await locationRepository.deleteLocation(locationId);

    },

    updateLocation : async function(locationId, data) {

        let location = await locationRepository.getById(locationId);
    
        if(!location)
            throw(buildError(400, 'no such location'));

        return await locationRepository.updateLocation(locationId, data);
    
    }

    
}