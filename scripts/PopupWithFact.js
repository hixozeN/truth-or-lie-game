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
    this._counterCorrect = 0;
    this._counterIncorrect = 0;
    this._trueFact = textResult.trueFact;
    this._falseFact = textResult.falseFact;
    this._check = check;
    this._answer = answer;
    this._nextQuestion = question;
    (this.getCorrectCounter = this.getCorrectCounter.bind(this)),
      (this.getIncorrectCounter = this.getIncorrectCounter.bind(this));
  }
  _checkAnswer = (evt) => {
    //если факт правдивый и нажали кнопку правда или факт ложный и нажали кнопку ложь то это правильный ответ
    if (
      (this._check() && evt.target === this._buttonPositive) ||
      (!this._check() && evt.target === this._buttonNegative)
    ) {
      this._showAnswer(this._typeSuccessClass, this._trueFact);
      this._counterCorrect += 1;
    } else {
      this._showAnswer(this._typeFailClass, this._falseFact);
      this._counterIncorrect += 1;
    }
  };

  getCorrectCounter() {
    return this._counterCorrect;
  }
  getIncorrectCounter() {
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
      this._checkAnswer(evt);
    });

    this._buttonNegative.addEventListener('click', (evt) => {
      this._openPopup();
      this._checkAnswer(evt);
    });
  }

  test() {
    console.log(this._popup)
  }
}