const getAnswers = (getRandomExpression, getCorrectAnswer, getUserAnswer) => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  const answer = getUserAnswer(expression);
  return {
    correctAnswer,
    answer,
  };
};

export default getAnswers;
