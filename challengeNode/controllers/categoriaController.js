const Categoria = require('../models/Categoria');

exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();

        res.json({ categorias });            
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}