import { varConfig, popupFormConfig, tabListConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWithFact } from './PopupWithFact.js';
import PopupWithForm from './PopupWithForm.js';
import FormAuth from './FormAuth.js';
import FormReg from './FormReg.js';
import TabList from './TabList.js';

const profileLinkAvatar = document.querySelector('.profile__link');
const buttonSignIn = document.querySelector('.navigation__link_type_sign-in');
const buttonSignUp = document.querySelector('.navigation__link_type_sign-up');

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
    profileLinkAvatar.removeEventListener('click', openAuthPopup);
  }
);

const formRegistration = new FormReg(
  'registration',
  async () => {
    popupAutorization.close();
    await fetch('http://45.146.165.205:3000/auth/registration', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formRegistration.getInputValues())
    })
      .then(res => res.json())
      .then(data => formRegistration.storeResponse(data))

    popupAutorization.open();
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

export const openAuthPopup = () => {
  tabListAutorization.openTab('autorization');
  popupAutorization.open()
}

profileLinkAvatar.addEventListener('click', openAuthPopup);
buttonSignIn.addEventListener('click', () => {
  openAuthPopup();
  burgerMenu._closeBurgerMenu();
});
buttonSignUp.addEventListener('click', () => {
  tabListAutorization.openTab('registration');
  popupAutorization.open();
  burgerMenu._closeBurgerMenu();
});

formAutorization.renderPage(localStorage.token);