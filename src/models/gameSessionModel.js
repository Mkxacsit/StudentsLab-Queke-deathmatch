const { DataTypes }= require('sequelize');
const sequelize = require('./sequelizeDB');

let gameSession = sequelize.define(
    'game_sessions',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        locationId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'location_id'
        },
        name: {
			type: DataTypes.STRING(50),
            allowNull: false,
      	},
		startTime:{
			type: DataTypes.DATE,
            allowNull: false,
			defaultValue: Date.now(),
            field: 'start_time'
		},
		endTime:{
			type: DataTypes.DATE,
            allowNull: false,
            field: 'end_time'
		},
		activityStatus{
			type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'activity_status'
		},
		maxUsers{
			type: DataTypes.INT.UNSIGNED,
            allowNull: false,
            field: 'max_users'
		},
    },
    {
        timestamps: false,
    }
);

module.exports = bets;