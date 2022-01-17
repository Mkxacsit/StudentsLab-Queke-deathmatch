
const sequelize = require('../database');
const errorBuilder = require('../utils/buildError');

let userInfoRepository = {

  getByUserId: async function(userId) {
    let userInfo = await sequelize.models.user_info.findOne({ where: { id: userId } });

    return userInfo;
  },

  addUserInfo: async function(instance) {
    let newUserInfo = await sequelize.models.user_info.create(instance);

    return newUserInfo;
  },


  /**
   * @param {*} instance must include user id
   */
  editUserInfo: async function(instance) {
    let userInfo = await sequelize.models.user_info.findOne({ where: { userId: instance.userId } });

    if (!userInfo) {
      throw(errorBuilder.build(404, `Not Found: user info with id ${instance.id}`));
    }

    userInfo.set({
      username: instance.username,
      avatar: instance.avatar,
      about: instance.about,
      
    });

    await userInfo.save(); 

    return userInfo;
  },
};

module.exports = userInfoRepository;
