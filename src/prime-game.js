import gameLevel from './index.js';

const createQuestion = () => {
  const result = Math.floor(Math.random() * 100);
  if (result === 0 || result === 1) {
    createQuestion();
  }
  return result;
};

const getRightAnswer = (question) => {
  const number = question;
  if (number === 1) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const primeGame = () => {
  const theQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLevel(theQuestion, createQuestion, getRightAnswer);
};

export default primeGame;
