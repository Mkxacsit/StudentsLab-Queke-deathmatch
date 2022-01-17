const express = require('express');
const errorBuilder = require('../utils/buildError');
const userInfoRepository = require('../repository/user_info');

let userInfoService = {
    
  getByUserId: async function(userId) {
    return userInfoRepository.getByUserId(userId);
  },

  addUserInfo: async function(instance) {
    return userInfoRepository.addUserInfo(instance);
  },

  editUserInfo: async function(instance) {
    return userInfoRepository.editUserInfo(instance);
  },
};

module.exports = userInfoService;