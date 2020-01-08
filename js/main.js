(() => {
  const app = document.querySelector('.app');
  const templates =  document.querySelector('#templates').content;
  const leftBtn = document.querySelector('.arrows__btn--left');
  const rightBtn = document.querySelector('.arrows__btn--right');
  const screensSelectors = [
    '.js-main--welcome', '.js-main--level-genre', '.js-main--level-artist', '.js-main--result-win',
    '.js-main--result-time-over', '.js-main--result-attempts-end'
  ];
  const ARROW_KEY_CODE = {
    LEFT: 37,
    RIGHT: 39
  };

  let oldScreen,
      newScreen,
      currentIndexScreen;

  function getScreens() {
    return screensSelectors.map(selector => templates.querySelector(selector));
  }

  function showScreen(screenIndex) {
    oldScreen = app.querySelector('.main');
    newScreen = screens[screenIndex];
    currentIndexScreen = screens.indexOf(newScreen);

    app.replaceChild(newScreen, oldScreen);
  }

  function onDocumentKeyDown(evt) {
    if (evt.keyCode === ARROW_KEY_CODE.LEFT) {
      if (currentIndexScreen > 0) {
        showScreen(--currentIndexScreen);
      }
    }

    if (evt.keyCode === ARROW_KEY_CODE.RIGHT) {
      if (currentIndexScreen < screens.length - 1) {
        showScreen(++currentIndexScreen);
      }
    }
  }

  const screens = getScreens();
  showScreen(0);

  document.addEventListener('keydown', onDocumentKeyDown);
  leftBtn.addEventListener('click', () => {
    if (currentIndexScreen > 0) {
      showScreen(--currentIndexScreen);
    }
  });
  rightBtn.addEventListener('click', () => {
    if (currentIndexScreen < screens.length - 1) {
      showScreen(++currentIndexScreen);
    }
  });
})();
