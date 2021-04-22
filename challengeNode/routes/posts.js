const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const postController = require('../controllers/postController');

// api/posts
router.get('/', postController.obtenerPosts);

router.get('/:id', postController.obtenerPost);

router.post('/',
    [
        check('titulo', 'El titulo del post es obligatorio').not().isEmpty(),
        check('contenido', 'El contenido del post es obligatorio').not().isEmpty(),
        check('imagen', 'La imagen del post es obligatoria').isURL().not().isEmpty(),
        check('categoria', 'La categoria del post es obligatoria').not().isEmpty(),
        check('fecha_creacion', 'La fecha de creacion del post es obligatoria').not().isEmpty()
    ],
    postController.crearPost);

router.patch('/:id',
    [
        check('titulo', 'El titulo del post es obligatorio').not().isEmpty(),
        check('contenido', 'El contenido del post es obligatorio').not().isEmpty(),
        check('imagen', 'La imagen del post es obligatoria').isURL().not().isEmpty(),
        check('categoria', 'La categoria del post es obligatoria').not().isEmpty(),
        check('fecha_creacion', 'La fecha de creacion del post es obligatoria').not().isEmpty()
    ],
    postController.editarPost);

router.delete('/:id', postController.eliminarPost);

module.exports = router;




