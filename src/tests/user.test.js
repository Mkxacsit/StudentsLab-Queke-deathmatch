const userService = require("../services/userService");

test('get userList', () => {

   userService.getAllUser().then(data => {
        expect(data).not.toBeNull();
    });

});

test('find by ID', () => {

    userService.getById(1).then(data => {
         expect(data).not.toBeNull();
     });
 
 });


