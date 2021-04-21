const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const categoriasController = require('../controllers/categoriasController');

// api/categorias
router.get('/', categoriasController.obtenerCategorias);

module.exports = router;