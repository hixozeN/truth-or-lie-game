import { varConfig, popupFormConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWithFact } from './PopupWithFact.js';
import PopupWithForm from './PopupWithForm.js';
import Form from './Form.js';

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
  () => {
    popupAutorization.close();
  }
);
const formRegistration = new Form(
  'registration',
  () => {
    popupAutorization.close();
  }
);
const popupAutorization = new PopupWithForm(
  '.popup_type_autorization',
  popupFormConfig,
  {
    formAutorization,
    formRegistration
  }
);

formAutorization.setEventListeners();
formRegistration.setEventListeners();
popupAutorization.setEventListeners();
burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
popupWithFact.setEventListeners();
popupStart.start();
