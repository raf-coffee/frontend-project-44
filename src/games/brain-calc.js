import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const MIN = 0;
const MAX = 10;
const OPERATIONS = ['+', '-', '*'];
const DESC = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operand1 = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
  const operand2 = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
  const operation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];
  return `${operand1} ${operation} ${operand2}`;
};

const getCorrectAnswer = (expression) => String(eval(expression));

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainCalc = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = getUserAnswer(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameEngine(brainCalc, DESC);
