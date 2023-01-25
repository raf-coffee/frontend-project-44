import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const MIN = 2;
const MAX = 100;
const DESC = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomExpression = () => Math.floor(MIN + Math.random() * (MAX + 1 - MIN));

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ').toLowerCase();
};

const brainPrime = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = getUserAnswer(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameEngine(brainPrime, DESC);
