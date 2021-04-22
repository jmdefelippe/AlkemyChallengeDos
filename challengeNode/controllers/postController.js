const Post = require('../models/Post');
const Categoria = require('../models/Categoria');
const { validationResult } = require('express-validator');
const fetch = require('node-fetch');

const validator = require('validator');

const esImagenValida = async (url) => {
    const formatosPermitidos = ['jpg','png','bmp','gif','jpeg'];
    const esUrlValida = validator.isURL(url);
    if (!esUrlValida) {
        return false;
    }
    const sinQueryParams = url.split('?')[0];
    let extension = sinQueryParams.split('.').pop();
    if (typeof extension !== 'string') {
        return false;
    }
    extension = extension.toLowerCase();
    if (!formatosPermitidos.includes(extension)){
        return false;
    }

    try {
        const response = await fetch(url, {
            method: 'HEAD'
        }); 
        return response.status == 200;
    } catch (error) {
        throw error;
    }
}

const obtenerCategoria = async (nombre) => {
    try {
        let categoria = await Categoria.findOne({ where: { nombre } });

        if (!categoria) {
            categoria = new Categoria({ nombre });
            await categoria.save();
        }

        return categoria;

    } catch (error) {
        throw error;
    }
}

exports.obtenerPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({ attributes: ['id','titulo','imagen','fecha_creacion'], include: { model: Categoria, as: 'categorias' } , order:[['fecha_creacion','DESC']] });

        res.json({ posts });            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findOne({ where: { id }, include: { model: Categoria, as: 'categorias'} });

        if (!post) {
            return res.status(404).json({ msg: 'Post no encontrado' })
        }

        res.json({ post });             
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearPost = async (req, res) => {
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    try {
        const imagenValida = await esImagenValida(req.body.imagen);

        if (!imagenValida) {
            return res.status(400).json({msg: 'Imágen no válida' })
        }

        const categoria = await obtenerCategoria(req.body.categoria);

        // crear un nuevo post
        let post = new Post({ ...req.body, categoriaId: categoria.id });

        await post.save();
        post = await Post.findById(post.id, {include: { model: Categoria, as: 'categorias'}});

        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.editarPost = async(req, res) => {
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    const { titulo, contenido, imagen, fecha_creacion, categoria } = req.body;
    const nuevoPost = {};

    nuevoPost.titulo = titulo == nuevoPost.titulo ? nuevoPost.titulo : titulo
    nuevoPost.contenido = contenido == nuevoPost.contenido ? nuevoPost.contenido : contenido
    nuevoPost.imagen = imagen == nuevoPost.imagen ? nuevoPost.imagen : imagen
    nuevoPost.fecha_creacion = fecha_creacion == nuevoPost.fecha_creacion ? nuevoPost.fecha_creacion : fecha_creacion

/*
    if (titulo) { nuevoPost.titulo = titulo; }
    if (contenido) { nuevoPost.contenido = contenido; }
    if (imagen) { nuevoPost.imagen = imagen; }
    if (fecha_creacion) { nuevoPost.fecha_creacion = fecha_creacion; }
*/

    try {
        
        if (categoria) {
            const dbCategoria = await obtenerCategoria(req.body.categoria);
            nuevoPost.categoriaId = dbCategoria.id;
        }

        let post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ msg: 'Post no encontrado '})
        }

        await Post.update(nuevoPost, { where: { id: req.params.id } });
        
        post = await Post.findById(req.params.id, {include: { model: Categoria, as: 'categorias'}});
        res.json({post});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}


exports.eliminarPost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post no encontrado' })
        }

        await Post.destroy({ where: { id: req.params.id }});

        res.json({ msg: 'Post eliminado' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}