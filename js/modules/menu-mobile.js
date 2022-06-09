import initOutsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const userEvent = ['touchpad', 'click'];

  function openMenu() {
    menuButton.classList.add('active');
    menuList.classList.add('active');
    initOutsideClick(menuList, userEvent, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuButton) {
    userEvent.forEach((itemEvent) => {
      menuButton.addEventListener(itemEvent, openMenu);
      menuList.addEventListener(itemEvent, openMenu);
    });
  }
}
