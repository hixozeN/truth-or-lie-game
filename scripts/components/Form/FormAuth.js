import Form from "./Form.js";
import { openAuthPopup } from '../../index.js';
import { LOCAL_STORAGE_TOKEN_KEY } from "../../utils/conf.js";

export default class FormAuth extends Form {
  constructor(formName, submitCallback) {
    super(formName, submitCallback);
    this._buttonLogout = document.querySelector('.button_type_logout');
    this._profileAuth = document.querySelector('.profile_user');
    this._profileGuest = document.querySelector('.profile_guest');
    this._profileName = document.querySelectorAll('.profile__nickname');
    this._avatar = document.querySelector('.profile__link');
    this._state = {
      resData: {}
    }
  }

  storeResponse(res) {
    this._state.resData = res;
  }

  getBody() {
    super.getInputValues();
    return {
      email: this._state.inputValues.email,
      password: this._state.inputValues.password
    };
  }

  _fetchUserData() {
    return fetch('https://api.quiz.hixozen.ru', {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(res.message);
      })
      .then(userData => this._state.userData = userData)
      .catch(err => console.log(err))
  }

  setLocalStorage() {
    this._fetchUserData();
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, this._state.userData.token);
  }

  _loggedInSettingsForRender() {
    this._profileAuth.classList.add('profile_active');
    this._profileGuest.classList.remove('profile_active');
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
      delete localStorage.token;
      this.renderPage(localStorage.token);
      this._avatar.addEventListener('click', openAuthPopup);
    });
  }
}