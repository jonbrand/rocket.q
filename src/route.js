const express = require('express');

const route = express.Router();

route.get('/', (req, res) => res.render("index"));

route.get('/room', (req, res) => res.render("room"));

route.get('/create-room', (req, res) => res.render("create-room"));

// rota para alterar o estado de 'Marcar como lida' da pergunta


module.exports = route;