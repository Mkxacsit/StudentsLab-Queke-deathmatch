const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeDB');

let locations = sequelize.define(
    'locations',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        name:{
			type: DataTypes.STRING(50),
		},
		description:{
			type: DataTypes.TEXT,
		},
		poster:{
			type: DataTypes.STRING,
            defaultValue: "",
			unique: true,
		},
		file:{
			type: DataTypes.BIGINT.UNSIGNED,
			unique: true,
		},
    },
    {
        timestamps: false
    }
);

module.exports = locations;