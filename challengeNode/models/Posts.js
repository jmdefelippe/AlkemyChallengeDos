const Sequelize = require('sequelize');

const db = require('../config/db');

const Posts = db.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: Sequelize.STRING(50),
    contenido: Sequelize.STRING,
    imagen: Sequelize.STRING(100),
    categoria: {
        type: Sequelize.INTEGER
        
    },
    fechaCreacion: Sequelize.DATE
});

module.exports = Posts;
