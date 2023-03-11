import { varConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';
import { PopupWithFact } from './PopupWithFact.js';
import { PopupWithResult } from './PopupWithResult.js';
import { PopupStart } from './PopupStart.js';

const getFact = new Fact(varConfig); // Получаем экземпляр класса Fact. Метод: .fetchRandomFact();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();
const popupWithFact = new PopupWithFact(
  '.popup_type_fact',
  varConfig,
  getFact.getCheckedFact,
  getFact.getTextAnswer,
  getFact.fetchRandomFact
);
const popupWithResult = new PopupWithResult(
  '.popup_type_result',
  popupWithFact.getCorrectCounter,
  popupWithFact.getIncorrectCounter,
  varConfig
);
const popupStart = new PopupStart(
  '.popup_type_start',
  varConfig,
  popupWithResult.timer
);

burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
popupWithFact.setEventListeners();
popupStart.start();
