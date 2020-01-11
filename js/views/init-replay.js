import {changeView} from "../utils";
import {initWelcomeView, welcomeView} from "./welcome";

const initReplay = () => {
  const replayBtn = document.querySelector('.main-replay');

  const onReplayBtnClick = (evt) => {
    changeView(welcomeView);
    initWelcomeView();
  };

  replayBtn.addEventListener('click', onReplayBtnClick);
};

export default initReplay;
