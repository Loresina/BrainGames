import gameLevel from './index.js';

const createQuestion = () => {
  const result = Math.floor(Math.random() * 100);
  if (result === 0) {
    createQuestion();
  }
  return result;
};

const getRightAnswer = (textQuestion) => {
  const number = Number(textQuestion);
  if (number === 1) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const primeGame = () => {
  const questionTexst = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  // const textQuestion = createQuestion;
  // const rightAnswer = getRightAnswer;

  gameLevel(questionTexst, createQuestion, getRightAnswer);
};

export default primeGame;
