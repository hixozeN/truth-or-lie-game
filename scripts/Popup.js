export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  _openPopup() {
    this._popupSelector.classList.add('popup_opened');
  }

  _closePopup() {
    this._popupSelector.classList.remove('popup_opened');
  }
}
