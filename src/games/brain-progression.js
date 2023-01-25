import readlineSync from 'readline-sync';
import gameEngine from '../index.js';
import getAnswers from '../answers-generator.js';
import getRandomNumber from '../number-generator.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;
const STEP = 2;
const DESC = 'What number is missing in the progression?';

const getRandomExpression = () => {
  const arr = [];
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH);
  const index = getRandomNumber(0, length - 1);
  let element = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  for (let i = 0; i < length; i += 1) {
    if (i === index) {
      element += STEP;
      arr.push('..');
    } else {
      arr.push((element += STEP));
    }
  }
  return arr.join(' ');
};

const getCorrectAnswer = (expression) => {
  const arr = expression.split(' ');
  const missedElementIndex = arr.indexOf('..');
  return missedElementIndex === 0 ? `${arr[1] - STEP}` : `${Number(arr[missedElementIndex - 1]) + STEP}`;
};

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

const brainProgression = () => getAnswers(getRandomExpression, getCorrectAnswer, getUserAnswer);

export default () => gameEngine(brainProgression, DESC);
