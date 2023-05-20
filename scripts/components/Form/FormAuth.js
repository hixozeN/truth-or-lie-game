import Form from "./Form.js";
import { openAuthPopup } from '../../index.js';

export default class FormAuth extends Form {
  constructor(formName, submitCallback) {
    super(formName, submitCallback);
    this._buttonLogout = document.querySelector('.button_type_logout');
    this._profileAuth = document.querySelector('.profile_user');
    this._profileGuest = document.querySelector('.profile_guest');
    this._profileName = document.querySelectorAll('.profile__nickname');
    this._avatar = document.querySelector('.profile__link');
    this._loginInput = document.querySelector('#email_login');
    this._state = {
    }
  }

  getBody() {
    super.getInputValues();
    return {
      email: this._state.inputValues.email,
      password: this._state.inputValues.password
    };
  }

  autoCompleteLoginInputAfterRegistration(email) {
    this._loginInput.value = email;
  }

  _loggedInSettingsForRender() {
    this._profileAuth.classList.add('profile_active');
    this._profileGuest.classList.remove('profile_active');
    this._avatar.removeEventListener('click', openAuthPopup);
    this._avatar.style.cursor = 'auto';
    this._profileName.forEach(nickname => nickname.textContent = localStorage.name)
  }

  _guestSettingsForRender() {
    this._profileGuest.classList.add('profile_active');
    this._profileAuth.classList.remove('profile_active');
    this._profileName.forEach(nickname => nickname.textContent = 'Гость')
  }

  renderPage(token) {
    token ? this._loggedInSettingsForRender() : this._guestSettingsForRender();
  }

  setEventListeners() {
    super.setEventListeners();

    this._buttonLogout.addEventListener('click', () => {
      delete localStorage.name;
      delete localStorage.email;
      delete localStorage.id;
      delete localStorage.token;
      this._avatar.style.cursor = 'pointer';
      this.renderPage(localStorage.token);
      this._avatar.addEventListener('click', openAuthPopup);
    });
  }
}