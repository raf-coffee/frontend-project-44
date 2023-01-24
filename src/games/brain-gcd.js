import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const MIN = 0;
const MAX = 10;
const DESC = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let gcd = 1;
  for (let divisor = 2; divisor <= Math.max(num1, num2); divisor += 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      gcd = divisor;
    }
  }
  return gcd;
};

const getRandomExpression = () => {
  const operand1 = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
  const operand2 = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
  return `${operand1} ${operand2}`;
};

const getCorrectAnswer = (expression) => {
  const [num1, num2] = expression.split(' ');
  return getGCD(num1, num2);
};

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  return Number.isNaN(Number(answer)) ? answer : Number(answer);
};

const brainGcd = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = getUserAnswer(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameEngine(brainGcd, DESC);
