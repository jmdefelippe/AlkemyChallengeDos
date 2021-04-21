const express = require('express');
const routes = require('./routes/categorias');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const db = require('./config/db');

const categorias = require('./routes/categorias');
const posts = require('./routes/posts');

require('./models/Categorias');
require('./models/Posts');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());


// importar rutas
app.use('/api/categorias', categorias);
app.use('/api/posts', posts);

app.listen(4000);