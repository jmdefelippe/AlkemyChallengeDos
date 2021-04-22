const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// api/categorias
router.get('/', categoriaController.obtenerCategorias);

module.exports = router;