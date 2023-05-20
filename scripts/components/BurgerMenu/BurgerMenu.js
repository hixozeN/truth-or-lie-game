export default class BurgerMenu {
  constructor() {
    this._menu = document.querySelector('.burger-menu');
    this._toggle = this._menu.querySelector('.burger-menu__toggle');
    this._sectionProfile = document.querySelector('.section-profile');
  }

  _closeBurgerMenu() {
    this._menu.classList.toggle('burger-menu_active');
    this._sectionProfile.classList.toggle('section-profile_hide');
  }

  _setEventListener() {
    this._toggle.addEventListener('click', () => {
      this._closeBurgerMenu();
    });
  }


  activateBurgerMenu() {
    this._setEventListener();
  }
}