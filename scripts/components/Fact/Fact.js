import Api from "../../utils/Api.js";

const api = new Api();

class Fact {
  constructor(config) {
    this._questionTextSelector = config.questionTextSelector;
    this.fetchRandomFact = this.fetchRandomFact.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.returnAnswer = this.returnAnswer.bind(this);
  }

  // Получаем рандомный факт, сгенерированный на бэке
  fetchRandomFact() {
    // оборачиваем запрос в промис
    api.getRandomFact()
      .then(
        (fact) => {
          this._question = fact.data.question; // Записываем вопрос факта
          this._answer = fact.data.answer; // Записываем правильный ответ на факт
          this._isFactTrue = fact.data.isTrue; // Записываем булевое значение факта - правдивый или нет
          this._questionTextSelector.textContent = fact.data.question; // Записываем вопрос на главной странице
        })
        .catch((err) => console.log(err));
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
