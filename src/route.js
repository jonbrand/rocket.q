const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));

route.get('/create-room', (req, res) => res.render("index", {page: 'create-room'}));

route.get('/room/:room', (req, res) => res.render("room"));

// rota para alterar o estado de 'Marcar como lida' da pergunta ou 'Excluir'
route.post('/question/:room/:question/:action', QuestionController.index);

// rota de criação de uma sala
route.post('/create-session', RoomController.create);


module.exports = route;