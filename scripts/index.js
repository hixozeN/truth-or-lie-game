import { varConfig } from "./conf.js";
import BurgerMenu from "./Burger-menu.js"
import Fact from "./Fact.js";

const getFact = new Fact(varConfig);
const activeBergerMenu = () => {
  const burgerMenu = new BurgerMenu();
  return burgerMenu.activateBurgerMenu();
}

activeBergerMenu();


getFact.enableFactGenerator();