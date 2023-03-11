import { Popup } from './Popup.js';
export class PopupStart extends Popup {
  constructor(popupSelector, { buttonStart }, timer) {
    super(popupSelector);
    this._buttonStart = buttonStart;
    this._timer = timer;
  }

  start() {
    this._buttonStart.addEventListener('click', () => {
      this._closePopup();
      this._timer();
    });
  }
}
