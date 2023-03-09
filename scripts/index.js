import { varConfig } from './conf.js';
import BurgerMenu from './Burger-menu.js';
import Fact from './Fact.js';

const getFact = new Fact('.popup_type_fact-answer', varConfig); // Получаем экземпляр класса Fact. Метод: .fetchRandomFact();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();

burgerMenu.activateBurgerMenu();
getFact.fetchRandomFact();
getFact.setEventListeners();

