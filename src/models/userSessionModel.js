const { DataTypes }= require('sequelize');
const sequelize = require('./sequelizeDB');

let userSession = sequelize.define(
    'user_sessions',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'user_id'
        },
        sessionId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'sessiont_id'
        },
       
    },
    {
        timestamps: false,
    }
);

module.exports = userSessions;