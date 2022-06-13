export default class Modal {
  constructor(abrir, fechar, container) {
    this.modalAbrir = document.querySelector(abrir);
    this.modalFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(container);

    // bind no callback para fazer refência ao this da class
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addEventModal() {
    this.modalAbrir.addEventListener('click', this.eventToggleModal);
    this.modalFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickForaModal);
  }

  init() {
    if (this.modalAbrir && this.modalFechar && this.containerModal) {
      this.addEventModal();
    }
    return this;
  }
}
