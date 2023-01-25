import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getAnswers from '../answers-generator.js';
import getRandomNumber from '../number-generator.js';

const MIN = 0;
const MAX = 10;
const OPERATIONS = ['+', '-', '*'];
const DESC = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operand1 = getRandomNumber(MIN, MAX);
  const operand2 = getRandomNumber(MIN, MAX);
  const operation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];
  return `${operand1} ${operation} ${operand2}`;
};

const getCorrectAnswer = (expression) => {
  const [num1, operator, num2] = expression.split(' ');
  let result = 0;
  switch (operator) {
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }

  return String(result);
};

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainCalc = () => getAnswers(getRandomExpression, getCorrectAnswer, getUserAnswer);

export default () => gameEngine(brainCalc, DESC);
