import runGameLevel from './index.js';

const createQuestion = () => {
  const question = `${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}`;

  const questionArray = question.split(' ');
  const firstNumber = Number(questionArray[0]);
  const secondNumber = Number(questionArray[1]);

  let rightAnswer = 0;
  if (firstNumber === secondNumber) {
    rightAnswer = firstNumber;
  }
  if (firstNumber === 0 || secondNumber === 0) {
    rightAnswer = firstNumber + secondNumber;
  }
  const count = firstNumber > secondNumber ? secondNumber : firstNumber;
  for (let i = count; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      rightAnswer = i;
      break;
    }
    rightAnswer = 1;
  }
  return [question, rightAnswer];
};

const gcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  runGameLevel(gameDescription, createQuestion);
};

export default gcdGame;
