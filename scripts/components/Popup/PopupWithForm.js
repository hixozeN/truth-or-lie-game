import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, config) {
    super(popupSelector);
  }
  open() {
    super._openPopup();
  }

  close() {
    super._closePopup();
  }

  _switchForm(evt) {
    evt.target
  }
}