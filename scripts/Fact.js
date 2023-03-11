class Fact {
  constructor(config) {
    this._questionTextSelector = config.questionTextSelector;
    this.fetchRandomFact = this.fetchRandomFact.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.returnAnswer = this.returnAnswer.bind(this);
  }

  // Получаем рандомный факт, сгенерированный на бэке
  async fetchRandomFact() {
    // оборачиваем запрос в промис
    this._promise = new Promise(async (resolve, reject) => {
      let res = await fetch('http://45.146.165.205:3000/facts/getRandomFact');
      resolve(res.json());
    }).then(
      (fact) => {
        this._question = fact.question; // Записываем вопрос факта
        this._answer = fact.answer; // Записываем правильный ответ на факт
        this._isFactTrue = fact.isTrue; // Записываем булевое значение факта - правдивый или нет
        this._questionTextSelector.textContent = fact.question; // Записываем вопрос на главной странице
      }
      /*
    При успешном ответе вызываем метод, который обработает полученный факт
    и вернет нам данные, с которыми мы будем работать
  */
    );
  }

  /*
    Метод проверки ответа
  */
  checkAnswer() {
    return this._isFactTrue;
  }

  returnAnswer() {
    return this._answer;
  }
}

export default Fact;
