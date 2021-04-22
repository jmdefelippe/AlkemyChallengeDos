const Sequelize = require('sequelize');
const db = require('../config/db');

const Post = db.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: Sequelize.STRING(50),
    contenido: Sequelize.STRING,
    imagen: Sequelize.STRING(255),
    fecha_creacion: Sequelize.DATE
});

module.exports = Post;
