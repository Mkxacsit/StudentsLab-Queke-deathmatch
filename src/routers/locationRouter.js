const express = require('express');
const router = express.Router();

const validate = require('../middlewares/validationResultMiddle');
const auth = require('../middlewares/authorize');
const isAdmin = require('../middlewares/isAdmin');
const errorHandler = require('../middlewares/errorHandler');


const locationController = require('../controllers/locationController');

const locationValidator = require('../validators/locationValidator');

      
router.use(auth);


router.get('/all', isAdmin, locationController.getAllLocations /*
#swagger.tags = ['Locations']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.get('/:id', locationController.getById /*
#swagger.tags = ['Locations']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.post('/', isAdmin, locationValidator, validate, locationController.addLocation /*
#swagger.tags = ['Locations']
#swagger.security = [{ "bearerAuth": [] }]
*/); 
router.delete('/:id', locationController.deleteLocation /*
#swagger.tags = ['Locations']
#swagger.security = [{ "bearerAuth": [] }]
*/); 
router.put('/:id', locationValidator,validate, locationController.updateLocation /*
#swagger.tags = ['Locations']
#swagger.security = [{ "bearerAuth": [] }]
*/); 



router.use(errorHandler);

module.exports = router;