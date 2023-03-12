import Form from "./Form.js";

export default class FormAuth extends Form {
  constructor(formName, submitCallback) {
    super(formName, submitCallback);
    this._buttonLogout = document.querySelector('.button_type_logout');
    this._profileAuth = document.querySelector('.profile_user');
    this._profileGuest = document.querySelector('.profile_guest');
    this._profileName = document.querySelectorAll('.profile__nickname');
    this._state = {
      resData: {}
    }
  }

  storeResponse(res) {
    this._state.resData = res;
  }

  setLocalStorage() {
    localStorage.setItem('token', this._state.resData.token);
    localStorage.setItem('username', this._state.resData.user.username);
  }

  _loggedInSettingsForRender() {
    this._profileAuth.classList.add('profile_active');
    this._profileGuest.classList.remove('profile_active');
    this._profileName.forEach(nickname => nickname.textContent = localStorage.username)
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
      delete localStorage.username;
      delete localStorage.token;
      this.renderPage(localStorage.token);
    });
  }
}