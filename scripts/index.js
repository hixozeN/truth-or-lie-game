import { varConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWidthFact } from './PopupWidthFact.js';

const getFact = new Fact(varConfig); // Получаем экземпляр класса Fact. Метод: .fetchRandomFact();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();
const popupWidthFact = new PopupWidthFact(
  varConfig,
  getFact.checkAnswer,
  getFact.returnAnswer
); // Получаем экземпляр класса. Вторым аргументом передаем результат проверки ответа

burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
popupWidthFact.setEventListeners();

//отправляем новый запрос на сервер при клике на кнопку закрывания попапа
varConfig.buttonNextQuestion.addEventListener('click', () => {
  getFact.fetchRandomFact();
});
