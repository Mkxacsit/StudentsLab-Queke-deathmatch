const sequelize = require("./models/sequelizeDB");

const user         = require("./models/user");
const userInfo     = require("./models/userInfo");
const userSessions = require("./models/userSessions");
const role         = require("./models/roles");
const usersRoles   = require("./models/usersRoles");
const locations    = require("./models/location");
const gameSessions = require("./models/gameSession");

    


user.hasOne( userInfo, { foreignKey: 'userId', as: 'information' });
userInfo.belongsTo( user, { foreignKey: 'userId', as: 'user' });

user.belongsToMany( role, { through: 'users_roles', foreignKey: 'userId', otherKey: 'roleId'});
role.belongsToMany( user, { through: 'users_roles', foreignKey: 'roleId', otherKey: 'userId' });

user.belongsToMany( gameSessions, { through: 'users_sessions', foreignKey: 'userId', otherKey: 'sessionId' });
gameSessions.belongsToMany( user, { through: 'users_sessions', foreignKey: 'sessionId', otherKey: 'userId' });


gameSessions.belongsTo( locations, { foreignKey: 'locationId' });
locations.hasMany( gameSessions, { foreignKey: 'locationId'});


sequelize.sync();

module.exports = sequelize;