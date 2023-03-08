class Fact {
  constructor(config) {
    this._questionTextSelector = config.questionTextSelector;
    this._buttonPositive = config.buttonPositive;
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

  /*
    Метод проверки ответа
  */
  checkAnswer = (evt) => {
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
}

export default Fact;
