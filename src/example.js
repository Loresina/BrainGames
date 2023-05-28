const randomNumber = () => Math.floor(Math.random() * 100);
const operators = ['-', '+', '*'];
const operator = operators[Math.floor(Math.random() * 3)];

const gameQuestion = `${randomNumber()} ${operator} ${randomNumber()}`;
const gameQuestionToArray = gameQuestion.split(' ');

const calculation = (expression) => {
  const firstNumber = Number(expression[0]);
  const secondNumber = Number(expression[2]);
  const operation = expression[1];
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};
console.log(gameQuestionToArray);
console.log(calculation(gameQuestionToArray));
