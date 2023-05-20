import { varConfig, popupFormConfig, tabListConfig } from './utils/conf.js';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.js';
import Fact from './components/Fact/Fact.js';
import { PopupWithFact } from './components/Popup/PopupWithFact.js';
import PopupWithForm from './components/Popup/PopupWithForm.js';
import FormAuth from './components/Form/FormAuth.js';
import FormReg from './components/Form/FormReg.js';
import TabList from './components/TabList/TabList.js';
import { api } from './utils/Api.js';

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
    await api.login(formAutorization.getBody())
      .then( async (res) => {
        localStorage.setItem('token', res.token);
        await api.getCurrentUserData()
          .then((user) => {
            localStorage.setItem('name', user.data.name);
            localStorage.setItem('email', user.data.email);
            localStorage.setItem('id', user.data._id);
          })
          .catch((err) => console.log(err));
        formAutorization.renderPage(localStorage.token);
        profileLinkAvatar.removeEventListener('click', openAuthPopup);
        popupAutorization.close();
        formAutorization.resetForm();
      })
      .catch((err) => console.log(err));
  }
);

const formRegistration = new FormReg(
  'registration',
  () => {
    console.log(formRegistration.getBody())
    api.register(formRegistration.getBody())
      .then((res) => {
        formAutorization.autoCompleteLoginInputAfterRegistration(res.email);
        formRegistration.resetForm();
        tabListAutorization.openTab('autorization');
      })
      .catch((err) => console.log(err));
    
    // 
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

const calc = () => {
  let res = "";
  facts.forEach(fact => {
    if (fact.question.length == 360) {
      res = fact.question
    }
  })
  console.log(res)
}

calc()