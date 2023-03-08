export class Popup {
  constructor(
    {
      popupSelector,
      popupContentSelector,
      buttonPositive,
      buttonNegative,
      buttonNextQuestion,
    },
    check
  ) {
    this._popupSelector = popupSelector;
    this._popupContentSelector = popupContentSelector;
    this._buttonPositive = buttonPositive;
    this._buttonNegative = buttonNegative;
    this._buttonNextQuestion = buttonNextQuestion;
    this._check = check;
  }
  _openPopup() {
    this._popupSelector.classList.add('popup_opened');
  }

  _closePopup() {
    this._popupSelector.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._buttonNextQuestion.addEventListener('click', () => {
      this._closePopup();
      this._popupContentSelector.setAttribute('class', 'popup__content');
    });

    this._buttonPositive.addEventListener('click', (evt) => {
      this._openPopup();
      this._check(evt);
    });

    this._buttonNegative.addEventListener('click', (evt) => {
      this._openPopup();
      this._check(evt);
    });
  }
}
