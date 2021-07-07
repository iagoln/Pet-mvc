var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController')
const petsController = require('../controllers/petsController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/servicos',servicosController.index)
router.get('/servicos/:id',servicosController.show)
router.get('/pets',petsController.index)
router.get('/pets/:id',petsController.show)
module.exports = router;

