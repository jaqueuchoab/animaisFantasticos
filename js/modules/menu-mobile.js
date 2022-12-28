import initOutsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.elementClass = 'active';

    // Define argumentos de events como padrão caso não seja definido pelo usuário da classe
    if (events === undefined) {
      this.events = ['touchpad', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.elementClass);
    this.menuButton.classList.add(this.elementClass);
    initOutsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.elementClass);
      this.menuButton.classList.remove(this.elementClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((itemEvent) => {
      this.menuButton.addEventListener(itemEvent, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
