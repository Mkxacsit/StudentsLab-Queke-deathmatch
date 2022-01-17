const express = require('express');
const router = express.Router();

const validate = require('../middlewares/validationResultMiddle');
const auth = require('../middlewares/authorize');
const isAdmin = require('../middlewares/isAdmin');
const errorHandler = require('../middlewares/errorHandler');


const sessionController = require('../controllers/sessionController');

const sessionValidator = require('../validators/sessionValidator');

      
router.use(auth);


router.get('/all', isAdmin, sessionController.getAllSessions /*
#swagger.tags = ['Sessions']
#swagger.security = [{ "bearerAuth": [] }]
*/); 
router.get('/:id', sessionController.getById /*
#swagger.tags = ['Sessions']
#swagger.security = [{ "bearerAuth": [] }]
*/); 
router.post('/', isAdmin, sessionValidator, validate, sessionController.addSession /*
#swagger.tags = ['Sessions']
#swagger.security = [{ "bearerAuth": [] }]
*/);
router.delete('/:id', sessionController.deleteSession /*
#swagger.tags = ['Sessions']
#swagger.security = [{ "bearerAuth": [] }]
*/);    
router.put('/:id', sessionValidator, validate, sessionController.updateSession /*
#swagger.tags = ['Sessions']
#swagger.security = [{ "bearerAuth": [] }]
*/); 



router.use(errorHandler);

module.exports = router;