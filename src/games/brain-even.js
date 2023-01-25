import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getAnswers from '../answers-generator.js';
import getRandomNumber from '../number-generator.js';

const MIN = 0;
const MAX = 100;
const DESC = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomExpression = () => getRandomNumber(MIN, MAX);

const getCorrectAnswer = (number) => {
  const isEven = number % 2 === 0;
  return isEven ? 'yes' : 'no';
};

const getUserAnswer = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ').toLowerCase();
};

const brainEven = () => getAnswers(getRandomExpression, getCorrectAnswer, getUserAnswer);

export default () => gameEngine(brainEven, DESC);
