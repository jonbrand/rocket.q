const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

// seta qual é o mecanismo que vai redenrizar a tela
server.set('view engine', 'ejs');

// utiliza as páginas do frontend
server.use(express.static("public"));

// seta o caminho para a pasta views
server.set('views', path.join(__dirname, 'views'));

server.use(route);

server.listen(3000, () => console.log("Servidor farmando!🚂"));