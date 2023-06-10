import gameLevel from './index.js';

const createQuestion = () => {
  const randomNumber = () => Math.floor(Math.random() * 100);
  const operators = ['-', '+', '*'];
  const operator = operators[Math.floor(Math.random() * 3)];

  return `${randomNumber()} ${operator} ${randomNumber()}`;
};

const getRightAnswer = (textQuestion) => {
  const textQuestionArray = textQuestion.split(' ');
  const firstNumber = Number(textQuestionArray[0]);
  const secondNumber = Number(textQuestionArray[2]);
  const operation = textQuestionArray[1];

  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const calcGame = () => {
  const theQuestion = 'What is the result of the expression?';

  gameLevel(theQuestion, createQuestion, getRightAnswer);
};

export default calcGame;
