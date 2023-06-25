import runGameLevel from './index.js';

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

  const rightAnswer = progression[index];

  progression[index] = '..';
  const qestion = progression.join(' ');

  return [qestion, rightAnswer];
};

const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';

  runGameLevel(gameDescription, createQuestion);
};

export default progressionGame;
