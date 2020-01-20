import {GAME_SETTINGS} from "./game";

let isCorrectAnswer;

const addPlayerAnswer = (state, isCorrectAnswer, currentPlayer) => {
  if (!isCorrectAnswer) {
    state.mistakes++;
    currentPlayer.remainingNotes--;
  }

  currentPlayer.answers.push = {
    correctly: isCorrectAnswer,
    time: 30
  }
};

const checkAnswer = (state, question, answers, currentPlayer) => {
  if (GAME_SETTINGS.QUESTION_TYPES.GENRE) {
    isCorrectAnswer = answers.every(answer => answer === question.genre);
    addPlayerAnswer(state, isCorrectAnswer, currentPlayer);

    return;
  }
};

export default checkAnswer;
