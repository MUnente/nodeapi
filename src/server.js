const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');

// Iniciando o App
const app = express();

app.use(express.json());
app.use(cors());

// Iniciando a DB
require('./database/conn');
require('./models/ProductTable');

// Rotas
app.use('/api', require('./routes'));

app.use(errors());

app.listen(3001);
