export default class BurgerMenu {
  constructor() {
    this._menu = document.querySelector('.burger-menu');
    this._toggle = this._menu.querySelector('.burger-menu__toggle');
  }

  _closeBurgerMenu() {
    this._menu.classList.toggle('burger-menu_active');
  }

  _setEventListener() {
    this._toggle.addEventListener('click', () => this._closeBurgerMenu());
  }


  activateBurgerMenu() {
    this._setEventListener();
  }
}