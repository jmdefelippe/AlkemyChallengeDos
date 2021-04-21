const Categorias = require('../models/Categorias');

exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.findAll();

//        const posts = await Post.find({ usuario: req.usuario.id }).sort({ fecha: -1 });
        res.json({ categorias });            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}