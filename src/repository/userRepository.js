const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
const buildError = require('../utils/buildError');
const crypt = require('../utils/crypt');

module.exports = userRepository = {
    
    getById : async function(userId) {

        let user = await sequelize.models.users.findByPk(userId);
        

        return user;

    },
    
    getByLogin: async function(login) {
        let user = await sequelize.models.users.findOne({ where : { login: login } });
        
        return user;
      },

    getByUsername : async function(username) {

        let userInfo =  await sequelize.models.user_info.findOne(
            { where : { 
                username : username
                }
            }
        );
        
        if(!userInfo)
            return null;

        return userInfo.getUser();
    },

    getAllUser : async function() {

        let res = await sequelize.models.users.findAll({
            attributes: ['id', 'login', 'password']
          });

        return res;
    },

    addUser : async function(instance, username) {

        let hashedPassword = await crypt.cryptPassword(instance.password);
        instance.password = hashedPassword;

        let user = await sequelize.models.users.create(instance);

        user.createInformation( {username : username } );
        
        let userRole = await sequelize.models.roles.findOne(
            { where: {
                name : "User"
                } 
            }
        );

        user.addRole(userRole);

        return user;
    },

    updateUser : async function(userId, newdata) {

        let user = await sequelize.models.users.findByPk(userId);

        await user.update(newdata);

        return user;
    },

    deleteAccount : async function(userId) {

        let user = await sequelize.models.users.findByPk(userId);
        let userInfo = await user.getInformation();
        
        await userInfo.destroy();
        await user.destroy();

        return user;
    },
    
   

}