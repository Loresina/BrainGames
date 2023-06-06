import gameLevel from './index.js';

const createQuestion = () => {
  let nextNumber = Math.floor(Math.random() * 10);
  const plusNumber = Math.floor(Math.random() * 10);
  const changeIndex = Math.floor(Math.random() * 10);
  const index = changeIndex < 9 ? changeIndex : 9;

  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression[i] = nextNumber;
    nextNumber += plusNumber;
  }

  progression[index] = '..';

  return progression.join(' ');
};

const getRightAnswer = (textQuestion) => {
  const textQuestionArray = textQuestion.split(' ');
  const mysteryIndex = textQuestionArray.indexOf('..');
  let plusNumber = 0;
  let result = 0;

  if (mysteryIndex <= 5) {
    plusNumber = Number(textQuestionArray[8]) - Number(textQuestionArray[7]);
    result = Number(textQuestionArray[mysteryIndex - 1]) + plusNumber;
  } else {
    plusNumber = Number(textQuestionArray[3]) - Number(textQuestionArray[2]);
    result = Number(textQuestionArray[mysteryIndex - 1]) + plusNumber;
  }
  return result;
};

const progressionGame = () => {
  const theQuestion = 'What number is missing in the progression?';
  // const textQuestion = createQuestion;
  // const rightAnswer = getRightAnswer;
  gameLevel(theQuestion, createQuestion, getRightAnswer);
};

export default progressionGame;
