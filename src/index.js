import readlineSync from 'readline-sync';

const runGameLevel = (gameDescription, createQuestion) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // question
  console.log(gameDescription);

  // levels counter
  let count = 1;
  while (count < 4) {
    const [textQuestion, rightAnswer] = createQuestion();
    console.log(`Question: ${textQuestion}`);
    const theAnswer = readlineSync.question('Your answer: ');

    if (theAnswer !== String(rightAnswer)) {
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

export default runGameLevel;
