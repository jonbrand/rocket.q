export default function Modal(){
    // seletor dentro do elemento 'modal-wrapper'
    const modalWrapper = document.querySelector('.modal-wrapper');    
    // cancelamento de botão
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener("click", close);

    function open() {
        // funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add("active");
    }

    function close() {
        // funcionalidade de remover a classe active da modal
        modalWrapper.classList.remove("active");
    }

    return {
        open,
        close
    }
}