const express = require('express');
const userRepository = require('../repository/userRepository');
const buildError = require('../utils/buildError');

module.exports = userService = {

    getById : async function(userId) {

         let user = await userRepository.getById(userId);
        
        if(!user)
            throw(buildError(400,'no such user'));

         return user;
    },

    getAllUser : async function() {
        
        return await userRepository.getAllUser();
        
    },

    addUser : async function(instance, username) {

        if(await userRepository.getByLogin(instance.login))
            throw(buildError(400, 'email already in use'));

        if(await userRepository.getByUsername(username))
            throw(buildError(400, 'username already in use'));

        return userRepository.addUser(instance, username);

    },

    deleteAccount : async function(userId) {

        return await userRepository.deleteAccount(userId);

    },

    updateUser : async function(userId, data) {

        return await userRepository.updateUser(userId, data);
    
    }

    
}