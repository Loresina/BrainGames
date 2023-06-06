import gameLevel from './index.js';

const createQuestion = () => `${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}`;

const getRightAnswer = (textQuestion) => {
  const textQuestionArray = textQuestion.split(' ');
  const firstNumber = Number(textQuestionArray[0]);
  const secondNumber = Number(textQuestionArray[1]);

  if (firstNumber === secondNumber) {
    return firstNumber;
  }

  if (firstNumber === 0 || secondNumber === 0) {
    return firstNumber + secondNumber;
  }

  const count = firstNumber > secondNumber ? secondNumber : firstNumber;

  for (let i = count; i > 0; i -= 1) {
    if (firstNumber % count === 0 && secondNumber % count === 0) {
      return count;
    }
  }
  return 1;
};

const gcdGame = () => {
  const theQuestion = 'Find the greatest common divisor of given numbers.';
  // const textQuestion = createQuestion;
  // const rightAnswer = getRightAnswer;

  gameLevel(theQuestion, createQuestion, getRightAnswer);
};

export default gcdGame;
