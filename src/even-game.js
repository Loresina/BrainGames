import runGameLevel from './index.js';

const createQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  if (question === 0) {
    createQuestion();
  }

  let rightAnswer = '';
  if (question % 2 === 0) {
    rightAnswer = 'yes';
  } else { rightAnswer = 'no'; }

  return [question, rightAnswer];
};

const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGameLevel(gameDescription, createQuestion);
};

export default evenGame;
