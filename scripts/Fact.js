class Fact {
  constructor(config) {
    this._questionTextSelector = config.questionTextSelector;
    this._buttonPositive = config.buttonPositive;
    this._buttonNegative = config.buttonNegative;
    this._buttonNextQuestion = config.buttonNextQuestion;
    this._popupSelector = config.popupSelector;
    this._popupContentSelector = config.popupContentSelector;
    this._popupHeadTextSelector = config.popupHeadTextSelector;
    this._popupAnswerTextSelector = config.popupAnswerTextSelector;
    this._typeSuccessClass = config.typeSuccessClass;
    this._typeFailClass = config.typeFailClass;
    this._countCorrectSelector = config.countCorrectSelector;
    this._counterCorrect = config.counterCorrect;
    this._countIncorrectSelector = config.countIncorrectSelector;
    this._counterIncorrect = config.counterIncorrect;
    this._successTrueFact = config.textResult.successTrueFact;
    this._successFalseFact = config.textResult.successFalseFact;
    this._failTrueFact = config.textResult.failTrueFact;
    this._failFalseFact = config.textResult.failFalseFact;
  }

  async _fetchRandomFact() {
    this._promise = new Promise(async (resolve, reject) => {
      let res = await fetch("http://45.146.165.205:3000/facts/getRandomFact");
      resolve(res.json());
    });
    this._promise.then(fact => this._treatFact(fact))
  }

  _treatFact(fact) {
    this._question = fact.question;
    this._answer = fact.answer;
    this._isFactTrue = fact.isTrue;
    this._questionTextSelector.textContent = fact.question;
  }

  _openPopup() {
    this._popupSelector.classList.add('popup_opened');
    this._popupAnswerTextSelector.textContent = this._answer;
  }

  _closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    this._fetchRandomFact();
  }

  _checkAnswer(evt) {
    if (this._isFactTrue) {
      (evt.target === this._buttonPositive)
        ? this._showAnswer(this._typeSuccessClass, this._successTrueFact)
        : this._showAnswer(this._typeFailClass, this._failTrueFact)
    } else {
      (evt.target === this._buttonPositive)
        ? this._showAnswer(this._typeFailClass, this._failFalseFact)
        : this._showAnswer(this._typeSuccessClass, this._successFalseFact)
    }
  }

  _showAnswer(classResult, textResult) {
    this._popupContentSelector.classList.add(classResult);
    this._popupHeadTextSelector.textContent = textResult;
    (classResult === this._typeSuccessClass) ? this._counterCorrect += 1 : this._counterIncorrect += 1;
    this._countCorrectSelector.textContent = this._counterCorrect;
    this._countIncorrectSelector.textContent = this._counterIncorrect;
  }

  _setEventListeners() {
    this._buttonNextQuestion.addEventListener('click', () => {
      this._closePopup();
      this._popupContentSelector.setAttribute('class', 'popup__content');
    });

    this._buttonPositive.addEventListener('click', (evt) => {
      this._openPopup();
      this._checkAnswer(evt);
    })

    this._buttonNegative.addEventListener('click', (evt) => {
      this._openPopup();
      this._checkAnswer(evt);
    })
  }

  enableFactGenerator() {
    this._fetchRandomFact();
    this._setEventListeners();
  }
}

export default Fact;