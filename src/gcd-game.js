import gameLevel from './index.js';

const createQuestion = () => `${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}`;

const getRightAnswer = (textQuestion) => {
  const textQuestionArray = textQuestion.split(' ');
  const firstNumder = Number(textQuestionArray[0]);
  const secondNumder = Number(textQuestionArray[1]);

  if (firstNumder === secondNumder) {
    return firstNumder;
  }

  if (firstNumder === 0 || secondNumder === 0) {
    return firstNumder + secondNumder;
  }

  const _count = firstNumder > secondNumder ? secondNumder : firstNumder;

  for (let i = _count; i > 0; i -= 1) {
    if (firstNumder % _count === 0 && secondNumder % _count === 0) {
      return _count;
    }
  }
  return 1;
};

const gcdGame = () => {
  const questionTexst = 'Find the greatest common divisor of given numbers.';
  const textQuestion = createQuestion;
  const rightAnswer = getRightAnswer;

  gameLevel(questionTexst, textQuestion, rightAnswer);
};

export default gcdGame;
