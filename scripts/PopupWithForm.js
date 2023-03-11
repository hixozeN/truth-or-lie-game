import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, config, formList) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector(config.buttonCloseSelector);
    // this._form = this._popup.querySelector('form');
    this._formList = formList;
    this._tabList = this._popup.querySelectorAll('.popup__forms-link')

    // console.log(this._tabList);
  }

  open() {
    super._openPopup();
  }

  close() {
    super._closePopup();
    // this._formList.forEach(form => form.reset());
  }


  _tabForm() {
    this._formList.forEach((form) => {
      const inputName = input.getAttribute('name')
      form.value = data[`${inputName}`];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonClose.addEventListener('click', () => this._closePopup());
    this._tabList.forEach((tab) => {
      tab.addEventListener('click', () => {
        console.log(tab);
      });
    });
  }
}