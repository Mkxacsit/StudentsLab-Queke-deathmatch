const locationService = require("../services/locationService");

test('get location list', () => {

    locationService.getAllLocations().then(data => {
        expect(data).not.toBeNull();
    });

});

test('get location by id', () => {

    locationService.getById(1).then(data => {
         expect(data).not.toBeNull();
    });
 
 });

test('create locaion', () => {
    
    let location = {
        name : "jesttest",
        description: "jesttest",
        poster : "jesttest",
        file: "555"
    }

    locationService.addLocation(location)
    .then( createdLocation => {

        expect(
            locationService.deleteLocation(createdLocation.id)
        ).resolves.not.toBeNull();
    });

});


