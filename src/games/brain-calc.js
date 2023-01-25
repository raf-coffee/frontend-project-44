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

const getCorrectAnswer = (expression) => String(eval(expression));

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainCalc = () => getAnswers(getRandomExpression, getCorrectAnswer, getUserAnswer);

export default () => gameEngine(brainCalc, DESC);
