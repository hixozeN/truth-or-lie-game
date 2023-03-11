export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopup = this._closePopup.bind(this);
  }

  _openPopup() {
    this._popup.classList.add('popup_opened');
  }

  _closePopup() {
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains('popup_opened') ||
        evt.target.classList.contains('popup__button-close')
      ) {
        this._closePopup();
      }
    });
  }

}
