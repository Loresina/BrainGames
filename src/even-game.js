import gameLevel from './index.js';

const createQuestion = () => Math.floor(Math.random() * 100);

const getRightAnswer = (textQuestion) => {
  if (textQuestion % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const questionTexst = 'Answer "yes" if the number is even, otherwise answer "no".';
  const textQuestion = createQuestion;
  const rightAnswer = getRightAnswer;

  gameLevel(questionTexst, textQuestion, rightAnswer);
};

export default evenGame;
