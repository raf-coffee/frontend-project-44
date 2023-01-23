import readlineSync from 'readline-sync';

const MIN = 0;
const MAX = 100;
const COUNT = 3;

const getRandomArbitrary = () => Math.floor(MIN + Math.random() * (MAX + 1 - MIN));

const getCorrectAnswer = (number) => {
  const isEven = number % 2 === 0;
  return isEven ? 'yes' : 'no';
};

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ').toLowerCase();
};

const brainEven = () => {
  let count = 1;
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count <= COUNT) {
    const number = getRandomArbitrary();
    const correctAnswer = getCorrectAnswer(number);
    const answer = askQuestion(number);
    if (answer === correctAnswer) {
      console.log('Correct');
      if (count === COUNT) {
        console.log(`Congratulations, ${name}!`);
      }
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`);
      break;
    }
  }
};

export default brainEven;
