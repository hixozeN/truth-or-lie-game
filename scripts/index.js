import { varConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { Popup } from './Popup.js';

const getFact = new Fact(varConfig); // Получаем экземпляр класса Fact. Метод: .fetchRandomFact();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();
const popup = new Popup(varConfig, getFact.checkAnswer); // Получаем экземпляр класса. Вторым аргументом передаем результат проверки ответа

burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
popup.setEventListeners();

//отправляем новый запрос на сервер при клике на кнопку закрывания попапа
varConfig.buttonNextQuestion.addEventListener('click', () => {
  getFact.fetchRandomFact();
});
