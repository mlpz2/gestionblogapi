const express = require('express');
const autoresController = require('../controllers/autores.controller')
const router = express.Router();

router.get('/', autoresController.getAutores);
router.post('/create', autoresController.createAutor);
router.delete('/delete', autoresController.deleteAutor);
router.put('/update', autoresController.updateAutor);

module.exports = router;
