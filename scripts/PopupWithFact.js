import { Popup } from './Popup.js';
export class PopupWithFact extends Popup {
  constructor(
    popupSelector,
    {
      buttonPositive,
      buttonNegative,
      buttonNextQuestion,
      popupAnswerTextSelector,
      popupHeadTextSelector,
      textResult,
      typeSuccessClass,
      typeFailClass,
      popupContentSelector,
      counterCorrect,
      counterIncorrect,
    },
    check,
    answer,
    question
  ) {
    super(popupSelector);
    this._buttonPositive = buttonPositive;
    this._buttonNegative = buttonNegative;
    this._buttonNextQuestion = buttonNextQuestion;
    this._popupHeadTextSelector = popupHeadTextSelector;
    this._popupAnswerTextSelector = popupAnswerTextSelector;
    this._typeSuccessClass = typeSuccessClass;
    this._typeFailClass = typeFailClass;
    this._popupContentSelector = popupContentSelector;
    this._counterCorrect = counterCorrect;
    this._counterIncorrect = counterIncorrect;
    this._successTrueFact = textResult.successTrueFact;
    this._successFalseFact = textResult.successFalseFact;
    this._failTrueFact = textResult.failTrueFact;
    this._failFalseFact = textResult.failFalseFact;
    this._check = check;
    this._answer = answer;
    this._nextQuestion = question;
    (this.showCorrectResult = this.showCorrectResult.bind(this)),
      (this.showIncorrectResult = this.showIncorrectResult.bind(this));
  }
  checkTrue = (evt) => {
    if (this._check()) {
      if (evt.target === this._buttonPositive) {
        this._showAnswer(this._typeSuccessClass, this._successTrueFact);
        this._counterCorrect += 1;
      } else {
        this._showAnswer(this._typeFailClass, this._failTrueFact);
        this._counterIncorrect += 1;
      }
    } else {
      if (evt.target === this._buttonPositive) {
        this._showAnswer(this._typeFailClass, this._failFalseFact);
        this._counterCorrect += 1;
      } else {
        this._showAnswer(this._typeSuccessClass, this._successFalseFact);
        this._counterIncorrect += 1;
      }
    }
  };

  showCorrectResult() {
    return this._counterCorrect;
  }
  showIncorrectResult() {
    return this._counterIncorrect;
  }

  _showAnswer(classResult, textResult) {
    this._popupContentSelector.classList.add(classResult); // Добавим попапу фон в зависимости от ответа
    this._popupHeadTextSelector.textContent = textResult; // Поменяем заголовок попапа, пример: ("Верно, это правда" / "Неверно, это ложь")
    this._popupAnswerTextSelector.textContent = this._answer(); // Записываем правильный ответ на факт
  }

  _closePopup() {
    super._closePopup();
    this._nextQuestion();
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonNextQuestion.addEventListener('click', () => {
      this._closePopup();
      this._popupContentSelector.setAttribute('class', 'popup__content');
    });

    this._buttonPositive.addEventListener('click', (evt) => {
      this._openPopup();
      this.checkTrue(evt);
    });

    this._buttonNegative.addEventListener('click', (evt) => {
      this._openPopup();
      this.checkTrue(evt);
    });
  }
}
