const ANSWERS_LENGTH = 10;
const MIN_QUICK_ANSWER_TIME = 30;
const POINTS_MAP = {
  LOW_SUCCESS: 1,
  FAST_SUCCESS: 2,
  WRONG: -2
};

const calculateScore = (answers) => {
  return answers.reduce((playScore, answer) => {

    if (!answer.correctly) {
      return playScore + POINTS_MAP.WRONG;
    }

    if (answer.time <= MIN_QUICK_ANSWER_TIME) {
      return playScore + POINTS_MAP.FAST_SUCCESS;
    }

    if (answer.correctly) {
      return playScore + POINTS_MAP.LOW_SUCCESS;
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
