export default function initModal() {
  
}

const modalAbrir = document.querySelector('[data-modal="abrir"]');
const modalFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');


if (modalAbrir && modalFechar && containerModal) {
    function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }
    
    function clickForaModal(event) { //precisa verificar qual o elemento pois ao clicar no modal em sí a pagina também fecha
        if(event.target === this){
        toggleModal(event);
        }
    }
    
    modalAbrir.addEventListener("click", toggleModal);
    modalFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
    //esse container é toda a section que ocupa toda a pagina
}
