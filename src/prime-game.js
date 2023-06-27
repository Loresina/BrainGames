import runGameLevel from './index.js';

const createQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  if (question === 1 || question === 0) {
    createQuestion();
  }

  let rightAnswer = '';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      rightAnswer = 'no';
      break;
    }
    rightAnswer = 'yes';
  }
  return [question, rightAnswer];
};

const primeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGameLevel(gameDescription, createQuestion);
};

export default primeGame;
