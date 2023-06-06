import gameLevel from './index.js';

const createQuestion = () => `${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}`;

const getRightAnswer = () => {};

const primeGame = () => {
  const questionTexst = 'Find the greatest common divisor of given numbers.';
  const textQuestion = createQuestion;
  const rightAnswer = getRightAnswer;

  gameLevel(questionTexst, textQuestion, rightAnswer);
};

export default primeGame;
