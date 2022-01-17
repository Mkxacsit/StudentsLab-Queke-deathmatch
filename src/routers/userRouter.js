const express = require('express');
const router = express.Router();

const validate = require('../middlewares/validationResultMiddle');
const auth = require('../middlewares/authorize');
const isAdmin = require('../middlewares/isAdmin');
const errorHandler = require('../middlewares/errorHandler');


const userController = require('../controllers/userController');

const userValidator = require('../validators/userValidator');

      
router.use(auth);



router.get('/all', isAdmin, userController.getAllUsers /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.get('/:id', userController.getById /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/); 
router.post('/', isAdmin, userValidator, validate, userController.addUser /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.delete('/:id', userController.deleteAccount /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/);   
router.put('/:id', userController.updateUser /*
#swagger.tags = ['Users']
#swagger.security = [{ "bearerAuth": [] }]
*/); 



router.use(errorHandler);

module.exports = router;