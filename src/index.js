import readlineSync from 'readline-sync';

const check = (ans, rightAns) => {
  if (ans === rightAns) {
    return true;
  }
  return false;
};

const gameLevel = (theQuestion, createQuestion, getRightAnswer) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  // question
  console.log(theQuestion);

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
  console.log(`Congratulations, ${userName}!`);
};

export default gameLevel;
