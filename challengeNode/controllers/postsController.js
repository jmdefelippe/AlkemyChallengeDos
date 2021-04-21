const Posts = require('../models/Posts');

exports.obtenerPosts = async (req, res) => {
    try {
        const posts = await Posts.findAll();

//        const posts = await Post.find({ usuario: req.usuario.id }).sort({ fecha: -1 });
        res.json({ posts });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearPosts = async (req, res) => {
    
    const posts = await Posts.findAll();

    const titulo = req.body.nombre;

    let errores = [];

    if(!titulo) {
        errores.push({'texto': 'Agrega un Nombre al Post'})
    }

    // si hay errores
    if(errores.length > 0 ){
        res.render('nuevoPost', {
            titulo : 'Nuevo Post',
            errores,
            posts
        })
    } else {
        // No hay errores
        await Posts.create({ titulo });
        res.redirect('/');
    }
    
    
}

