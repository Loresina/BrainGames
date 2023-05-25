import readlineSync from 'readline-sync';

const check = (ans, num) => {
  if (ans !== 'yes' && ans !== 'no') {
    console.log('The anser should be only "yes" or "no".');
  }
  // const solutionAnser = '';

  if ((num % 2 === 0 && ans === 'yes') || (num % 2 !== 0 && ans === 'no')) {
    console.log('Correct!');
    return true;
  } if (num % 2 !== 0 && ans === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".\nLet\'s try again,');
    return false;
  } if (num % 2 === 0 && ans === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".\nLet\'s try again,');
    return false;
  }
};

// const responseLogic = (contine) => {
//   if (contine !== 'Correct!') {
//     return 'Correct!\nLet\'s try again,';
//   }

//   let count = 0;
//   while (count < 4) {
//     count += 1;
//   }
//   return 'Congratulations,';
// };

const evenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 1;
  while (count < 4) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const tnemAnser = readlineSync.question('Your answer: ');
    const result = check(tnemAnser, randomNumber);

    if (result === false) {
      return;
    }
    count += 1;
  }
  console.log(`Congratulations, ${userName}!`);

  // console.log(`${responseLogic(logic)} ${userName}!`);
  // console.log(`${solution(anser, randomNumber)} ${userName}!`);
};

export default evenGame;
