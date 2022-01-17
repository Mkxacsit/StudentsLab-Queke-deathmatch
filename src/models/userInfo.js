const { DataTypes }= require('sequelize');
const sequelize = require('./sequelizeDB');


let userInfo = sequelize.define(
    'user_info',
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
            unique: true,
            field: 'user_id'
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },       
        avatar : {
            type: DataTypes.BLOB
        },
        about : {
            type: DataTypes.TEXT,
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = userInfo;