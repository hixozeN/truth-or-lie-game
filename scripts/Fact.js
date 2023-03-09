import { Popup } from "./Popup.js";

class Fact extends Popup {
  constructor(popupSelector,
    {
      questionTextSelector,
      popupContentSelector,
      buttonPositive,
      buttonNegative,
      buttonNextQuestion,
      popupHeadTextSelector,
      popupAnswerTextSelector,
      typeSuccessClass,
      typeFailClass,
      countCorrectSelector,
      counterCorrect,
      countIncorrectSelector,
      counterIncorrect,
      textResultSuccessTrueFact,
      textResultSuccessFalseFact,
      textResultFailTrueFact,
      textResultFailFalseFact
    }) {
    super(popupSelector);
    this._questionTextSelector = questionTextSelector;
    this._buttonPositive = buttonPositive;
    this._buttonNegative = buttonNegative;
    this._buttonNextQuestion = buttonNextQuestion;
    this._popupContentSelector = popupContentSelector;
    this._popupHeadTextSelector = popupHeadTextSelector;
    this._popupAnswerTextSelector = popupAnswerTextSelector;
    this._typeSuccessClass = typeSuccessClass;
    this._typeFailClass = typeFailClass;
    this._countCorrectSelector = countCorrectSelector;
    this._counterCorrect = counterCorrect;
    this._countIncorrectSelector = countIncorrectSelector;
    this._counterIncorrect = counterIncorrect;
    this._successTrueFact = textResultSuccessTrueFact;
    this._successFalseFact = textResultSuccessFalseFact;
    this._failTrueFact = textResultFailTrueFact;
    this._failFalseFact = textResultFailFalseFact;
  }

  // Получаем рандомный факт, сгенерированный на бэке
  async fetchRandomFact() {
    // оборачиваем запрос в промис
    this._promise = new Promise(async (resolve, reject) => {
      let res = await fetch('http://45.146.165.205:3000/facts/getRandomFact');
      resolve(res.json());
    });
    /*
      При успешном ответе вызываем метод, который обработает полученный факт
      и вернет нам данные, с которыми мы будем работать
    */
    this._promise.then((fact) => {
      this._treatFact(fact);
    });
  }

  _treatFact(fact) {
    this._question = fact.question; // Записываем вопрос факта
    this._answer = fact.answer; // Записываем правильный ответ на факт
    this._isFactTrue = fact.isTrue; // Записываем булевое значение факта - правдивый или нет
    this._questionTextSelector.textContent = fact.question; // Записываем вопрос на главной странице
  }

  _closePopup() {
    super._closePopup();
    this.fetchRandomFact();
  }

  /*
    Метод проверки ответа
  */
  _checkAnswer = (evt) => {
    if (this._isFactTrue) {
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
    this._popupAnswerTextSelector.textContent = this._answer; // Записываем правильный ответ на факт

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
}

export default Fact;
