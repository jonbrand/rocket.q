const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));

route.get('/create-room', (req, res) => res.render("index", {page: 'create-room'}));

route.get('/room/:room', RoomController.open);

// rota de criação de uma sala
route.post('/create-session', RoomController.create);

// route to enter an existing room
route.post('/enterroom', RoomController.enter);

// create question
route.post('/question/create/:room', QuestionController.create);

// rota para alterar o estado de 'Marcar como lida' da pergunta ou 'Excluir'
route.post('/question/:room/:question/:action', QuestionController.index);

module.exports = route;