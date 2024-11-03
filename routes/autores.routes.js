const express = require('express');

const autoresController = require('../controllers/autores.controller');

const router = express.Router();



router.get('/', autoresController.getAutores); 


module.exports = router;