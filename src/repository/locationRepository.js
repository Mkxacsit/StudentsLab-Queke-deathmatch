const sequelize = require('../database');

module.exports = locationRepository = {
    
    getById : async function(locationId) {

        let location = await sequelize.models.locations.findByPk(locationId);
        

        return location;

    },
    
    getAllLocations : async function() {

        let locations = await sequelize.models.locations.findAll();

        return locations;
    },

    addLocation : async function(instance) {

        return await sequelize.models.locations.create(instance);
        
    },

    updateLocation : async function(locationId, newdata) {

        return await sequelize.models.locations.update(newdata, {where : { id : locationId}});
    },

    deleteLocation : async function(locationId) {

        let location = await this.getById(locationId);

        let deletedLocation = sequelize.models.locations.build(location);

        location.destroy();

        return deletedLocation;
    },
    
   

}