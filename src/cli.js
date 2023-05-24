import readlineSync from 'readline-sync';

const questions = () => {
  console.log('Проверка связи!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

export default questions;
