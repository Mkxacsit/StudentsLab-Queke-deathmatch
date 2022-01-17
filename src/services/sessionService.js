const express = require('express');
const sessionRepository = require('../repository/sessionRepository');
const buildError = require('../utils/buildError');

module.exports = sessionService = {

    getById : async function(sessionId) {

        let session = await sessionRepository.getById(sessionId);
        
        if(!session)
            throw(buildError(400, 'no such session'));

         return session;
    },

    getAllSessions : async function() {
        
        return await sessionRepository.getAllSessions();
        
    },

    addSession : async function(instance) {

        let location = await locationRepository.getById(instance.locationId);

        if(!location)
            throw(buildError(400, 'no such location'));

        return await sessionRepository.addSession(instance);

    },

    deleteSession : async function(sessionId) {

        let session = await sessionRepository.getById(sessionId);

        if(!session)
            throw(buildError(400, 'no such session'));


        return await sessionRepository.deleteSession(sessionId);

    },

    updateSession : async function(sessionId, data) {

        let session = await sessionRepository.getById(sessionId);

        if(!session)
            throw(buildError(400, 'no such session'));

        let location = await locationRepository.getById(data.locationId);

        if(!location)
            throw(buildError(400, 'no such location'));


        return await sessionRepository.updateSession(sessionId, data);
    
    }

    
}