import readlineSync from 'readline-sync';

const COUNT = 3;

const gameEngine = (game, description) => {
  let score = 1;
  console.log('Welcome to The Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  while (score <= COUNT) {
    const { correctAnswer, answer } = game();
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (score === COUNT) {
        console.log(`Congratulations, ${name}!`);
      }
      score += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`);
      break;
    }
  }
};

export default gameEngine;
