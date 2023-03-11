export default class Form {
  constructor(formName, submitCallback) {
    this._form = document.forms[formName];
    this._submitCallback = submitCallback;
    this._inputList = this._form.querySelectorAll('input');
    this._inputsValues = {};
  }

  // Нужно ли собирать данные инпутов? Если да, то нужно условие для чекбоксов
  _getInputValues() {
    this._inputList.forEach((inputElement) => {
      const inputName = inputElement.getAttribute('name')
      this._inputsValues[inputName] = inputElement.value;
    });
    return this._inputsValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
      this._form.reset();
    });
  }
}