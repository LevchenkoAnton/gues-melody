import {createNode, changeView} from "../utils";
import {gameGenreView, initGameGenreView} from "./level-genre";

const welcomeView = createNode(`
  <section class="main main--welcome js-main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>
`);

const initWelcomeView = () => {
  const playBtn = document.querySelector('.main-play');

  const onPlayBtnClick = (evt) => {
    changeView(gameGenreView);
    initGameGenreView();
  };

  playBtn.addEventListener('click', onPlayBtnClick);
};

export {welcomeView, initWelcomeView};
