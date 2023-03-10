import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, config) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector(config.buttonCloseSelector);
    this._form = this._popup.querySelector('form');
  }

  open() {
    super._openPopup();
  }

  _close() {
    super._closePopup();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonClose.addEventListener('click', () => {
      this._closePopup();
    });
  }
}