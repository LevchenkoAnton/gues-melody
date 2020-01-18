const ANSWERS_LENGTH = 10;
const MIN_QUICK_ANSWER_TIME = 30;

const calculateScore = (answers) => {
  return answers.reduce((playScore, answer) => {

    if (!answer.correctly) {
      return playScore - 2;
    }

    if (answer.time <= MIN_QUICK_ANSWER_TIME) {
      return playScore + 2;
    }

    if (answer.correctly) {
      return playScore + 1;
    }

  }, 0);
};

const getPlayerScore = (answers, remainingNotes) => {
  if (answers.length !== ANSWERS_LENGTH || remainingNotes < 0) {
    return -1;
  }

  return calculateScore(answers);
};

export default getPlayerScore
