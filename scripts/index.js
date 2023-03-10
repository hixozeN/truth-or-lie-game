import { varConfig, popupFormConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWithFact } from './PopupWithFact.js';
import PopupWithForm from './PopupWithForm.js';

const getFact = new Fact(varConfig); // Получаем экземпляр класса Fact. Метод: .fetchRandomFact();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();
const popupWithFact = new PopupWithFact(
  '.popup_type_fact',
  varConfig,
  getFact.checkAnswer,
  getFact.returnAnswer
); // Получаем экземпляр класса. Вторым аргументом передаем результат проверки ответа
const popupAutorization = new PopupWithForm('.popup_type_autorization', popupFormConfig);
popupAutorization.setEventListeners();

burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
popupWithFact.setEventListeners();

//отправляем новый запрос на сервер при клике на кнопку закрывания попапа
varConfig.buttonNextQuestion.addEventListener('click', () => {
  getFact.fetchRandomFact();
});

document.querySelector('.profile__link').addEventListener('click', () => {
  popupAutorization.open();
});
