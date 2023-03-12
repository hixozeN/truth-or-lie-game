import { varConfig, popupFormConfig, tabListConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWithFact } from './PopupWithFact.js';
import PopupWithForm from './PopupWithForm.js';
import Form from './Form.js';
import FormAuth from './FormAuth.js';
import TabList from './TabList.js';

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

const formAutorization = new FormAuth(
  'autorization',
  async () => {
    popupAutorization.close();
    await fetch('http://45.146.165.205:3000/auth/login', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formAutorization.getInputValues())
    })
      .then(res => res.json())
      .then(data => formAutorization.storeResponse(data))

    formAutorization.setLocalStorage();

    formAutorization.renderPage(localStorage.token);
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

formAutorization.renderPage(localStorage.token);