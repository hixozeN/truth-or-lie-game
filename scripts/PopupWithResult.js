import { Popup } from './Popup.js';
export class PopupWithResult extends Popup {
  constructor(
    popupSelector,
    correctResult,
    incorrectResult,
    { countCorrectSelector, countIncorrectSelector }
  ) {
    super(popupSelector);
    this._correctResult = correctResult;
    this._incorrectResult = incorrectResult;
    this._countCorrectSelector = countCorrectSelector;
    this._countIncorrectSelector = countIncorrectSelector;
  }
  timer() {
    setTimeout(() => {
      this._openPopup();
      this._countCorrectSelector.textContent = this._correctResult();
      this._countIncorrectSelector.textContent = this._incorrectResult();
    }, 10000);
  }
}