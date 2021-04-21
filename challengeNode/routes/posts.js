const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const postsController = require('../controllers/postsController');

// api/posts
router.get('/', postsController.obtenerPosts);
router.post('/', postsController.crearPosts);

module.exports = router;