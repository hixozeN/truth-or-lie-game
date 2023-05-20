import Form from "./Form.js";

export default class FormReg extends Form {
  constructor(formName, submitCallback) {
    super(formName, submitCallback);
    this._state = {
      resData: {}
    }
  }

  storeResponse(res) {
    this._state.resData = res;
  }

  getBody() {
    super.getInputValues();
    return {
      email: this._state.inputValues.email,
      name: this._state.inputValues.username,
      password: this._state.inputValues.password
    };
  }
}