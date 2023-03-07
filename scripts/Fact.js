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
  // Получаем рандомный факт, сгенерированный на бэке
  async _fetchRandomFact() {
    // оборачиваем запрос в промис
    this._promise = new Promise(async (resolve, reject) => {
      let res = await fetch("http://45.146.165.205:3000/facts/getRandomFact");
      resolve(res.json());
    });
    /*
      При успешном ответе вызываем метод, который обработает полученный факт
      и вернет нам данные, с которыми мы будем работать
    */
    this._promise.then(fact => this._treatFact(fact));
  }

  _treatFact(fact) {
    this._question = fact.question; // Записываем вопрос факта
    this._answer = fact.answer; // Записываем правильный ответ на факт
    this._isFactTrue = fact.isTrue; // Записываем булевое значение факта - правдивый или нет
    this._questionTextSelector.textContent = fact.question; // Записываем вопрос на главной странице
  }

  _openPopup() {
    this._popupSelector.classList.add('popup_opened');
    this._popupAnswerTextSelector.textContent = this._answer; // Записываем правильный ответ на факт
  }

  /*
    При закрытии попапа с ответом снова получаем рандомный факт, который сразу отренедерится на странице
    и отработает метод ._treatFact(), который везде прокинет новые данные.
  */
  async _closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    await this._fetchRandomFact();
  }

  /*
    Метод проверки ответа
  */
  _checkAnswer(evt) {
    if (this._isFactTrue) {                                               // если факт правдивый
      (evt.target === this._buttonPositive)                               // и нажата кнопка "Правда"
        // Везде отрабатываем метод показа ответа
        ? this._showAnswer(this._typeSuccessClass, this._successTrueFact) // передадим класс (зеленый фон) и текст правильного ответа
        : this._showAnswer(this._typeFailClass, this._failTrueFact)       // передадим класс (красный фон) и текст неверного ответа
    } else {                                                              // При ложном факте все зеркально
      (evt.target === this._buttonPositive)
        ? this._showAnswer(this._typeFailClass, this._failFalseFact)
        : this._showAnswer(this._typeSuccessClass, this._successFalseFact)
    }
  }

  _showAnswer(classResult, textResult) {
    this._popupContentSelector.classList.add(classResult);                // Добавим попапу фон в зависимости от ответа
    this._popupHeadTextSelector.textContent = textResult;                 // Поменяем заголовок попапа, пример: ("Верно, это правда" / "Неверно, это ложь")
    /*
      Здесь меняем счетчик правильных/неправильных ответов.
      Сделан на скорую руку, зависимость вообще по цвету фона, который мы передаем...
      Короче, поржать и улучшить как-то)
    */
    (classResult === this._typeSuccessClass) ? this._counterCorrect += 1 : this._counterIncorrect += 1;
    // И обновляем значение счетчиков на странице
    this._countCorrectSelector.textContent = this._counterCorrect;
    this._countIncorrectSelector.textContent = this._counterIncorrect;
  }

  // Важно! Здесь везде стрелочные функции, иначе потеряется контекст метода ._treatFact() и все данные по рандомному факту
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

  async enableFactGenerator() {
    await this._fetchRandomFact();
    this._setEventListeners();
  }
}

export default Fact;