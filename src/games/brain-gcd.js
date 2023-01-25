import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getAnswers from '../answers-generator.js';
import getRandomNumber from '../number-generator.js';

const MIN = 1;
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
  const operand1 = getRandomNumber(MIN, MAX);
  const operand2 = getRandomNumber(MIN, MAX);
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

const brainCalc = () => getAnswers(getRandomExpression, getCorrectAnswer, getUserAnswer);

export default () => gameEngine(brainCalc, DESC);
