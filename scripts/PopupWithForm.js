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
    // this._formList.forEach(form => form.reset());
  }

  _switchForm(evt) {
    evt.target
  }

  _sdf() {
    this._formList.forEach((form) => {
      const inputName = input.getAttribute('name')
      form.value = data[`${inputName}`];
    });
    return
  }
}