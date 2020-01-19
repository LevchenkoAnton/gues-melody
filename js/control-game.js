import {GAME_SETTINGS, questions, currentPlayer} from "./data/game";

import {gameGenreView, initGameGenreView} from "./views/level-genre";
import {gameArtistsView, initGameArtistsView} from "./views/level-artists";
import {resultFailTimeView} from "./views/result-fail-time";
import {resultsFailTriesView} from "./views/results-fail-tries";
import {resultWinView} from "./views/result-win";

import {changeView} from "./utils";
import initReplay from "./views/init-replay";

const showNextQuestion = (state, question, currentPlayer) => {
  if (question.type === GAME_SETTINGS.QUESTION_TYPES.GENRE) {
    changeView(gameGenreView);
    initGameGenreView();
    return;
  }

  if (question.type === GAME_SETTINGS.QUESTION_TYPES.ARTIST) {
    changeView(gameArtistsView);
    initGameArtistsView();
  }
};

const controlGame = (state) => {
  if (state.time < 0) {
    changeView(resultFailTimeView);
    initReplay();
    return;
  }

  if (state.mistakes === GAME_SETTINGS.MAX_MISTAKES) {
    changeView(resultsFailTriesView);
    initReplay();
    return;
  }

  if (state.level < GAME_SETTINGS.MAX_GAME_LEVEL) {
    showNextQuestion(state, questions[state.level], currentPlayer);
    state.level++;
    return;
  }

  if (state.level === GAME_SETTINGS.MAX_GAME_LEVEL) {
    changeView(resultWinView);
    initReplay();
  }
};

export default controlGame;
