import readlineSync from 'readline-sync';
import gameEngine from './index.js';

const MIN = 0;
const MAX = 100;
const DESC = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomArbitrary = () => Math.floor(MIN + Math.random() * (MAX + 1 - MIN));

const getCorrectAnswer = (number) => {
  const isEven = number % 2 === 0;
  return isEven ? 'yes' : 'no';
};

const getUserAnswer = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ').toLowerCase();
};

const brainEven = () => {
  const expression = getRandomArbitrary();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = getUserAnswer(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default () => gameEngine(brainEven, DESC);
