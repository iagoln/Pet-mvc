var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController')
const petsController = require('../controllers/petsController')
/* GET home page. */

router.get('/servicos',servicosController.index)
router.get('/servicos/:id',servicosController.show)
router.get('/pets',petsController.index)
router.get('/pets/:id',petsController.show)
module.exports = router;

