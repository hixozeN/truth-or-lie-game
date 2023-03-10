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
      countCorrectSelector,
      popupContentSelector,
      countIncorrectSelector,
      counterCorrect,
      counterIncorrect,
    },
    check,
    answer
  ) {
    super(popupSelector);
    this._buttonPositive = buttonPositive;
    this._buttonNegative = buttonNegative;
    this._buttonNextQuestion = buttonNextQuestion;
    this._popupHeadTextSelector = popupHeadTextSelector;
    this._popupAnswerTextSelector = popupAnswerTextSelector;
    this._typeSuccessClass = typeSuccessClass;
    this._typeFailClass = typeFailClass;
    this._countCorrectSelector = countCorrectSelector;
    this._popupContentSelector = popupContentSelector;
    this._counterCorrect = counterCorrect;
    this._countIncorrectSelector = countIncorrectSelector;
    this._counterIncorrect = counterIncorrect;
    this._successTrueFact = textResult.successTrueFact;
    this._successFalseFact = textResult.successFalseFact;
    this._failTrueFact = textResult.failTrueFact;
    this._failFalseFact = textResult.failFalseFact;
    this._check = check;
    this._answer = answer;
  }
  checkTrue = (evt) => {
    if (this._check()) {
      // если факт правдивый
      evt.target === this._buttonPositive // и нажата кнопка "Правда"
        ? // Везде отрабатываем метод показа ответа
          this._showAnswer(this._typeSuccessClass, this._successTrueFact) // передадим класс (зеленый фон) и текст правильного ответа
        : this._showAnswer(this._typeFailClass, this._failTrueFact); // передадим класс (красный фон) и текст неверного ответа
    } else {
      // При ложном факте все зеркально
      evt.target === this._buttonPositive
        ? this._showAnswer(this._typeFailClass, this._failFalseFact)
        : this._showAnswer(this._typeSuccessClass, this._successFalseFact);
    }
  };

  _showAnswer(classResult, textResult) {
    this._popupContentSelector.classList.add(classResult); // Добавим попапу фон в зависимости от ответа
    this._popupHeadTextSelector.textContent = textResult; // Поменяем заголовок попапа, пример: ("Верно, это правда" / "Неверно, это ложь")
    this._popupAnswerTextSelector.textContent = this._answer(); // Записываем правильный ответ на факт
    /*
      Здесь меняем счетчик правильных/неправильных ответов.
      Сделан на скорую руку, зависимость вообще по цвету фона, который мы передаем...
      Короче, поржать и улучшить как-то)
    */
    classResult === this._typeSuccessClass
      ? (this._counterCorrect += 1)
      : (this._counterIncorrect += 1);
    // И обновляем значение счетчиков на странице
    this._countCorrectSelector.textContent = this._counterCorrect;
    this._countIncorrectSelector.textContent = this._counterIncorrect;
  }
  setEventListeners() {
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

  test() {
    console.log(this._popup)
  }
}