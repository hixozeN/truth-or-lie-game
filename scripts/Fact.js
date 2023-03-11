class Fact {
  constructor(config) {
    this._questionTextSelector = config.questionTextSelector;
    this.fetchRandomFact = this.fetchRandomFact.bind(this);
    this.getCheckedFact = this.getCheckedFact.bind(this);
    this.getTextAnswer = this.getTextAnswer.bind(this);
  }

  // Получаем рандомный факт, сгенерированный на бэке
  async fetchRandomFact() {
    // оборачиваем запрос в промис
    this._promise = new Promise(async (resolve, reject) => {
      let res = await fetch('http://45.146.165.205:3000/facts/getRandomFact');
      resolve(res.json());
    }).then((fact) => {
      this._question = fact.question; // Записываем вопрос факта
      this._answer = fact.answer; // Записываем правильный ответ на факт
      this._isFactTrue = fact.isTrue; // Записываем булевое значение факта - правдивый или нет
      this._questionTextSelector.textContent = fact.question; // Записываем вопрос на главной странице
    });
  }

  getCheckedFact() {
    return this._isFactTrue;
  }

  getTextAnswer() {
    return this._answer;
  }
}

export default Fact;
