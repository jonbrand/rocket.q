import Modal from './modal.js';

const modal = Modal();

// alterar o HTML nos botões e texto para 'Marcar como lido'
const modalTitle = document.querySelector('.modal h2');

const modalDescription = document.querySelector('.modal p');

const modalButton = document.querySelector('.modal button');

// pegar todos os botões que existem com a classe 'check'
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", handleClick)
});

// pega todos os botões que existem com a classe 'delete'
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
});

// função que altera a frase do html de acordo com a ação
function handleClick(event, check = true) {
    // desabilita os links para que não altere a URL com o '#'
    event.preventDefault();

    const text = check ? "Marcar como lida" : "Excluir";
    // define qual ação está ativa
    const slug = check ? "check" : "delete";
    // seleciona a váriavel dentro da rota
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    // variáveis dentro do formulário
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML=  `${text} esta pergunta`;

    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;

    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`;
    
    //adiciona a coloração do botão de acordo com a ação
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    
    // abrir modal
    modal.open();
}