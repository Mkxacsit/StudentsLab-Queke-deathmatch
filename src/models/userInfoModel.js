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
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },       
        name: {
            type: DataTypes.STRING(50)
			unique: true,
        },
        deletedDate : {
            type: DataTypes.DATE,
			field: 'deleted_date'
        }
		 lastActivityDate : {
            type: DataTypes.DATE,
			field: 'last_activity_date'
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = userInfo;