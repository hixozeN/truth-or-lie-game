export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  _openPopup() {
    this._popup.classList.add('popup_opened');
  }

  _closePopup() {
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || (evt.target.classList.contains('popup__button-close'))) {
        this._closePopup();
      }
    });
    // Ниже перенести в наследника
    //   this._buttonNextQuestion.addEventListener('click', () => {
    //     this._closePopup();
    //     this._popupContentSelector.setAttribute('class', 'popup__content');
    //   });

    //   this._buttonPositive.addEventListener('click', (evt) => {
    //     this._openPopup();
    //     this._check(evt);
    //   });

    //   this._buttonNegative.addEventListener('click', (evt) => {
    //     this._openPopup();
    //     this._check(evt);
    //   });
  }
}
