const express = require('express');
const sessionService = require('../services/sessionService');
const responseHandler = require('../utils/responseHandler');


let sessionController = {

    getAllSessions : async function(req, res, next) {
 
        try {

            let sessions = await sessionService.getAllSessions();
            
            console.log(sessions);

            responseHandler.sendSuccess(res, sessions, 200); 
            
        }
        catch(error) {
            next(error);
        }

    },


    addSession : async function(req, res, next) {
 
        let session = {
            name : req.body.name,
            locationId : req.body.locationId,
            maxUsers: req.body.maxUsers || 10,
            activityStatus: req.body.activityStatus || true,
            startTime: req.body.startTime || Date.now(),
            endTime: req.body.endTime || Date.now().setDate(Date.now().getDate() + 1)
        }

        try {
            let result = await sessionService.addSession(session);

            responseHandler.sendSuccess(res, result, 201);
        }
        catch(error) {
            next(error);
        }

    },

    deleteSession : async function(req, res, next) {
 
        try {
            let session = await sessionService.deleteSession(req.params.id);

            responseHandler.sendSuccess(res, session, 200);
        }
        catch(error) {
            next(error);
        }

    },

    getById: async function(req, res, next) {

        try {
            let session = await sessionService.getById(req.params.id)
            responseHandler.sendSuccess(res, session, 200);
        }
        catch(error) {
            next(error);
        }

      },


    updateSession: async function(req, res, next) {

        try {

            let data = {
                name : req.body.name,
                locationId : req.body.locationId,
                maxUsers: req.body.maxUsers || 10,
                activityStatus: req.body.activityStatus || true,
                startTime: req.body.startTime || Date.now(),
                endTime: req.body.endTime || Date.now().setDate(Date.now().getDate() + 1)
            }

            let session = await sessionService.updateSession(req.params.id, data);

            responseHandler.sendSuccess(res, session, 200);
        }
        catch(error) {
            next(error);
        }
    }


  
};
module.exports = sessionController;