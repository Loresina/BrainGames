import readlineSync from 'readline-sync';

// const greeting = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello ${userName}!`);
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
// };

// const gameQuestion = (correctQuestion) => {
//   console.log(correctQuestion);
// };

const check = (ans, num) => {
  if (ans === num) {
    return true;
  }
  return false;
};

const gameLevel = (correctQuestion, createQuestion, getRightAnswer) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  // question
  console.log(correctQuestion);

  // levels counter

  let count = 1;
  while (count < 4) {
    const textQuestion = createQuestion();
    const rightAnswer = String(getRightAnswer(textQuestion));
    console.log(`Question: ${textQuestion}`);
    const theAnswer = readlineSync.question('Your answer: ');
    const result = check(theAnswer, rightAnswer);

    if (result === false) {
      console.log(
        `${theAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${userName}`);
};

export default gameLevel;
