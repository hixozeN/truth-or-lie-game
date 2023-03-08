import { varConfig } from "./conf.js";
import BurgerMenu from "./Burger-menu.js"
import Fact from "./Fact.js";

const getFact = new Fact(varConfig); // Получаем экземпляр класса Fact. Метод: .enableFactGenerator();
const burgerMenu = new BurgerMenu(); // Получаем экземпляр класса BurgerMenu. Метод: .activateBurgerMenu();


burgerMenu.activateBurgerMenu();
getFact.enableFactGenerator();