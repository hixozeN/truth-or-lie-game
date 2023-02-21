import { facts, varConfig } from "./conf.js";

function openPopup() {
  varConfig.popupSelector.classList.add('popup_opened');
  varConfig.popupAnswerTextSelector.textContent = facts[varConfig.randomedNumber].answer;
}

function closePopup() {
  varConfig.popupSelector.classList.remove('popup_opened');
  varConfig.popupContentSelector.setAttribute('class', 'popup__content');
  renderQuestion();
}

function renderQuestion() {
  varConfig.randomedNumber = Math.floor(Math.random() * facts.length);
  varConfig.questionTextSelector.textContent = facts[varConfig.randomedNumber].question;
  varConfig.buttonPositive.addEventListener('click', checkAnswer);
  varConfig.buttonNegative.addEventListener('click', checkAnswer);
}

function showAnswer(evt, classResult, textResult) {
  evt.target.removeEventListener('click', checkAnswer);
  varConfig.popupContentSelector.classList.add(classResult);
  varConfig.popupHeadTextSelector.textContent = textResult;
  (classResult === varConfig.typeSuccessClass) ? varConfig.counterCorrect += 1 : varConfig.counterIncorrect += 1;
  varConfig.countCorrectSelector.textContent = varConfig.counterCorrect;
  varConfig.countIncorrectSelector.textContent = varConfig.counterIncorrect;
  openPopup();
}

function checkAnswer(evt) {
  if (facts[varConfig.randomedNumber].isTrue) {
    (evt.target === varConfig.buttonPositive)
      ? showAnswer(evt, varConfig.typeSuccessClass, varConfig.textResult.successTrueFact)
      : showAnswer(evt, varConfig.typeFailClass, varConfig.textResult.failTrueFact)
  } else {
    (evt.target === varConfig.buttonPositive)
      ? showAnswer(evt, varConfig.typeFailClass, varConfig.textResult.failFalseFact)
      : showAnswer(evt, varConfig.typeSuccessClass, varConfig.textResult.successFalseFact)
  }
};

varConfig.buttonNextQuestion.addEventListener('click', closePopup);

renderQuestion();