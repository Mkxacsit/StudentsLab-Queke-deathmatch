const { DataTypes }= require('sequelize');
const sequelize = require('./sequelizeDB');

let gameSessions = sequelize.define(
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
          maxUsers:{
			type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'max_users'
		},
        endTime:{
			type: DataTypes.DATE,
            field: 'end_time'
		},
        activityStatus:{
			type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'activity_status'
		},
		
		startTime:{  
			type: DataTypes.DATE,
            
			defaultValue: Date.now(),
            field: 'start_time'
		},
		
		
    },
    {
        timestamps: false,
    }
);

module.exports = gameSessions;