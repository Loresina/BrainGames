import runGameLevel from './index.js';

const createQuestion = () => {
  const randomNumber = () => Math.floor(Math.random() * 100);
  const operators = ['-', '+', '*'];
  const operator = operators[Math.floor(Math.random() * 3)];

  const question = `${randomNumber()} ${operator} ${randomNumber()}`;

  const questionArray = question.split(' ');
  const firstNumber = Number(questionArray[0]);
  const secondNumber = Number(questionArray[2]);
  const action = questionArray[1];

  let rightAnswer = 0;
  if (action === '+') {
    rightAnswer = firstNumber + secondNumber;
  } else if (action === '-') {
    rightAnswer = firstNumber - secondNumber;
  } else if (action === '*') {
    rightAnswer = firstNumber * secondNumber;
  }

  return [question, rightAnswer];
};

const calcGame = () => {
  const gameDescription = 'What is the result of the expression?';

  runGameLevel(gameDescription, createQuestion);
};

export default calcGame;
