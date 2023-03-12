import { varConfig, popupFormConfig, tabListConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWithFact } from './PopupWithFact.js';
import PopupWithForm from './PopupWithForm.js';
import Form from './Form.js';
import TabList from './TabList.js';

// тест входа
const profileAuth = document.querySelector('.profile_user');
const profileGuest = document.querySelector('.profile_guest');
const profileName = document.querySelectorAll('.profile__nickname');

const formAuth = document.forms['autorization'];
const inputAuthLogin = formAuth.querySelector('.form__input_type_login');
const inputAuthPassword = formAuth.querySelector('.form__input_type_password');

const formReg = document.forms['registration'];
const inputRegLogin = formReg.querySelector('.form__input_type_login');
const inputRegPassword = formReg.querySelector('.form__input_type_password');


const btnLogout = document.querySelector('.button_type_logout');

const state = {
  formData: {
    "username": "",
    "password": ""
  },
  resData: {}
};

const authRender = () => {
  profileAuth.classList.add('profile_active');
  profileGuest.classList.remove('profile_active');
  profileName.forEach(nickname => nickname.textContent = localStorage.username)

};

const guestRender = () => {
  profileGuest.classList.add('profile_active');
  profileAuth.classList.remove('profile_active');
  profileName.forEach(nickname => nickname.textContent = 'Гость')
};

const renderPage = (token) => {
  token ? authRender() : guestRender()
};

inputAuthLogin.addEventListener('change', (evt) => { state.formData["username"] = evt.target.value; console.log(state.formData) });
inputAuthPassword.addEventListener('change', (evt) => { state.formData["password"] = evt.target.value; console.log(state.formData) });
inputRegLogin.addEventListener('change', (evt) => { state.formData["username"] = evt.target.value; console.log(state.formData) });
inputRegPassword.addEventListener('change', (evt) => { state.formData["password"] = evt.target.value; console.log(state.formData) });
btnLogout.addEventListener('click', () => {
  delete localStorage.username;
  delete localStorage.token;
  renderPage(localStorage.token);
})

const profileLinkAvatar = document.querySelector('.profile__link');

const getFact = new Fact(varConfig); // Получаем экземпляр класса Fact. Метод: .fetchRandomFact();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();
const popupWithFact = new PopupWithFact(
  '.popup_type_fact',
  varConfig,
  getFact.checkAnswer,
  getFact.returnAnswer,
  getFact.fetchRandomFact
); // Получаем экземпляр класса. Вторым аргументом передаем результат проверки ответа

const formAutorization = new Form(
  'autorization',
  async () => {
    popupAutorization.close();
    await fetch('http://45.146.165.205:3000/auth/login', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(state.formData)
    })
      .then(res => res.json())
      .then(data => state.resData = data)

    localStorage.setItem('token', state.resData.token);
    localStorage.setItem('username', state.resData.user.username);

    renderPage(localStorage.token);

    console.log(state.resData)
    console.log(formAutorization.getInputValues());
  }
);

const formRegistration = new Form(
  'registration',
  async () => {
    popupAutorization.close();
    await fetch('http://45.146.165.205:3000/auth/registration', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(state.formData)
    })
      .then(res => res.json())
      .then(data => state.resData = data)

    console.log(state.resData)
    console.log(formRegistration.getInputValues());
  }
);
const popupAutorization = new PopupWithForm(
  '.popup_type_autorization',
  popupFormConfig
);
const tabListAutorization = new TabList(tabListConfig);

tabListAutorization.setEventListeners();
formAutorization.setEventListeners();
formRegistration.setEventListeners();
popupAutorization.setEventListeners();
burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
popupWithFact.setEventListeners();

profileLinkAvatar.addEventListener('click', () => {
  popupAutorization.open();
});

renderPage(localStorage.token);