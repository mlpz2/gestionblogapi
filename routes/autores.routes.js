const express = require('express');
const autoresController = require('../controllers/autores.controller')
const router = express.Router();

router.get('/', autoresController.getAutores);
router.post('/create', autoresController.createAutor);
router.delete('/delete', autoresController.deleteAutor);

module.exports = router;
