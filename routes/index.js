var express = require('express');
var router = express.Router();
const servicosController = require('../controllers/servicosController')
const petsController = require('../controllers/petsController')
const institucionalController = require('../controllers/institucionalController');
/* GET home page. */

// http://localhost:3000/
router.get('/', institucionalController.index);
// http://localhost:3000/cadastro
router.get('/cadastro', institucionalController.cadastro)
// http://localhost:3000/servicos
router.get('/servicos', institucionalController.servicos)



module.exports = router;

