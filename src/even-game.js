import gameLevel from './index.js';

const createQuestion = () => {
  const result = Math.floor(Math.random() * 100);
  if (result === 0) {
    createQuestion();
  }
  return result;
};

const getRightAnswer = (textQuestion) => {
  if (textQuestion % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const questionTexst = 'Answer "yes" if the number is even, otherwise answer "no".';
  // const textQuestion = createQuestion;
  // const rightAnswer = getRightAnswer;

  gameLevel(questionTexst, createQuestion, getRightAnswer);
};

export default evenGame;
