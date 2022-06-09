export default function initModal() {
  const modalAbrir = document.querySelector('[data-modal="abrir"]');
  const modalFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (modalAbrir && modalFechar && containerModal) {
    modalAbrir.addEventListener('click', toggleModal);
    modalFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickForaModal);
  }
}
