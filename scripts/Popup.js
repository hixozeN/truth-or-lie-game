export class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  _openPopup() {
    this._popup.classList.add('popup_opened');
  }

  _closePopup() {
    this._popup.classList.remove('popup_opened');
  }
}
