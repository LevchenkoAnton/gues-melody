import controlGame from "../control-game";
import checkAnswer from "../data/check-answer";
import {getTitleTemplate, getStateTemplate, getPlayerTemplate} from "../components/components";
import {createNode} from "../utils";


const getGenreAnswerTemplate = (answerIndex, answer) => {
  return `
    <div class="genre-answer">
      ${getPlayerTemplate(answer.src)}
      <input class="js-genre-answer-input" type="checkbox" name="answer" value="${answer.genre}" id="a-${answerIndex}">
      <label class="genre-answer-check" for="a-${answerIndex}"></label>
    </div>
  `;
};

const getLevelGenreViewTemplate = (state, questionItem) => {
  return `
    <section class="main main--level main--level-genre js-main--level-genre">
      ${getStateTemplate(state)}
      <div class="main-wrap">
        ${getTitleTemplate(questionItem.question)}
        <form class="genre">

          ${questionItem.answers.reduce((answerTemplate, currentAnswer, answerIndex) => {
            return answerTemplate + getGenreAnswerTemplate(answerIndex, currentAnswer)
          }, ``)}

          <button class="genre-answer-send" type="submit" disabled>Ответить</button>
        </form>
      </div>
    </section>
  `;
};

const initLevelGenreView = (state, question, levelGenreTemplate, currentPlayer) => {
  const genreForm = levelGenreTemplate.querySelector('.genre');
  const answerInputs = Array.from(genreForm.querySelectorAll('.js-genre-answer-input'));
  const sendBtn = genreForm.querySelector('.genre-answer-send');

  const isGetAnswer = () => {
     return answerInputs.some(input => input.checked);
  };

  const onGenreFormChange = (evt) => {
    if ( evt.target.closest('.js-genre-answer-input') ) {
      sendBtn.disabled = !isGetAnswer();
    }
  };

  const onGenreFormSubmit = (evt) => {
    evt.preventDefault();
    if ( !isGetAnswer() ) return;

    const checkedAnswerInputs = Array.from(genreForm.querySelectorAll('.js-genre-answer-input:checked'));
    const answers = checkedAnswerInputs.map(input => input.value);

    checkAnswer(state, question, answers, currentPlayer);
    controlGame(state);
  };

  genreForm.addEventListener('change', onGenreFormChange);
  genreForm.addEventListener('submit', onGenreFormSubmit);
};

const getLevelGenreView = (state, question, currentPlayer) => {
  const levelGenreTemplate = createNode(getLevelGenreViewTemplate(state, question));

  initLevelGenreView(state, question, levelGenreTemplate, currentPlayer);

  return levelGenreTemplate;
};

export default getLevelGenreView;
