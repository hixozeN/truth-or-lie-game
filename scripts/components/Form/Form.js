export default class Form {
  constructor(formName, submitCallback) {
    this._form = document.forms[formName];
    this._submitCallback = submitCallback;
    this._inputList = Array.from(this._form.querySelectorAll("input"));
    this._state = {};
  }

  // Нужно ли собирать данные инпутов?
  getInputValues() {
    this._state.inputValues = this._inputList.reduce((result, inputElement) => {
      if (inputElement.type === "checkbox") {
        return {
          ...result,
          [inputElement.name]: inputElement.checked,
        };
      } else {
        return {
          ...result,
          [inputElement.name]: inputElement.value,
        };
      }
    }, {});
    return this._state.inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback();
    });
  }
}
