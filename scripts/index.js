import { varConfig, popupFormConfig, tabListConfig } from './utils/conf.js';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.js';
import Fact from './components/Fact/Fact.js';
import { PopupWithFact } from './components/Popup/PopupWithFact.js';
import PopupWithForm from './components/Popup/PopupWithForm.js';
import FormAuth from './components/Form/FormAuth.js';
import FormReg from './components/Form/FormReg.js';
import TabList from './components/TabList/TabList.js';
import Api from './utils/Api.js';

const profileLinkAvatar = document.querySelector('.profile__link');
const buttonSignIn = document.querySelector('.navigation__link_type_sign-in');
const buttonSignUp = document.querySelector('.navigation__link_type_sign-up');

const api = new Api();
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
  () => {
    popupAutorization.close();
    console.log(formAutorization.getBody())
    // продумай логику получения токена и данных пользователя
    // для рендера
    api.login(formAutorization.getBody())
      .then((res) => {
        formAutorization.setLocalStorage();
        formAutorization.renderPage(localStorage.token);
      })
      .catch((err) => console.log(err));
      
    profileLinkAvatar.removeEventListener('click', openAuthPopup);
  }
);

const formRegistration = new FormReg(
  'registration',
  async () => {
    popupAutorization.close();
    console.log(formRegistration.getBody())
    await fetch('https://api.quiz.hixozen.ru/register', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formRegistration.getBody())
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