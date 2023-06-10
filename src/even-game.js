import gameLevel from './index.js';

const createQuestion = () => {
  const result = Math.floor(Math.random() * 100);
  if (result === 0) {
    createQuestion();
  }
  return result;
};

const getRightAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const theQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLevel(theQuestion, createQuestion, getRightAnswer);
};

export default evenGame;
