const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/db');

const categorias = require('./routes/categorias');
const posts = require('./routes/posts');

require('./models/');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// importar rutas
app.use('/api/categorias', categorias);
app.use('/api/posts', posts);

app.listen(4000);