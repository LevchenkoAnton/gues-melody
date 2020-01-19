import songs from "./songs";

const GAME_SETTINGS = {
  MAX_GAME_LEVEL: 10,
  MAX_GAME_TIME: 300,
  START_LEVEL: 0,
  MAX_NOTES: 3,
  MAX_MISTAKES: 3,
  QUESTION_TYPES: {
    'GENRE': 'genre',
    'ARTIST': 'artist'
  }
};

const initialState = {
  time: GAME_SETTINGS.MAX_GAME_TIME,
  mistakes: 0,
  level: GAME_SETTINGS.START_LEVEL,
  resetToInitial() {
    this.time = GAME_SETTINGS.MAX_GAME_TIME;
    this.mistakes = 0;
    this.level = GAME_SETTINGS.START_LEVEL;
  }
};

const currentPlayer = {
  score: 0,
  remainingTime: GAME_SETTINGS.MAX_GAME_TIME,
  remainingNotes: GAME_SETTINGS.MAX_NOTES,
  answers: [],
  resetToDefault() {
    this.score = 0;
    this.remainingTime = GAME_SETTINGS.MAX_GAME_TIME;
    this.remainingNotes = GAME_SETTINGS.MAX_NOTES;
    this.answers = [];
  }
};

const questions = [
  {
    type: `genre`,
    genre: `R&B`,
    question: `Выберите все песни в жанре R'n'B`,
    answers: [
      { src: songs[3].src, genre: songs[3].genre },
      { src: songs[1].src, genre: songs[1].genre },
      { src: songs[4].src, genre: songs[4].genre },
      { src: songs[5].src, genre: songs[5].genre }
    ]
  },
  {
    type: `genre`,
    genre: `Jazz`,
    question: `Выберите все джазовые песни`,
    answers: [
      { src: songs[3].src, genre: songs[3].genre },
      { src: songs[1].src, genre: songs[1].genre },
      { src: songs[4].src, genre: songs[0].genre },
      { src: songs[5].src, genre: songs[5].genre }
    ]
  },
  {
    type: `genre`,
    genre: `R&B`,
    question: `Выберите все песни в жанре R'n'B`,
    answers: [
      { src: songs[3].src, genre: songs[3].genre },
      { src: songs[1].src, genre: songs[1].genre },
      { src: songs[4].src, genre: songs[4].genre },
      { src: songs[5].src, genre: songs[5].genre }
    ]
  },
  {
    type: `genre`,
    genre: `Jazz`,
    question: `Выберите все джазовые песни`,
    answers: [
      { src: songs[3].src, genre: songs[3].genre },
      { src: songs[1].src, genre: songs[1].genre },
      { src: songs[4].src, genre: songs[0].genre },
      { src: songs[5].src, genre: songs[5].genre }
    ]
  },
  {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Пелагея1`,
        isCorrect: false
      },
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Краснознамённая дивизия имени моей Бабушки1`,
        isCorrect: false
      },
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Кровосток1`,
        isCorrect: true
      }
    ]
  },
  {
    type: `genre`,
    genre: `R&B`,
    question: `Выберите все песни в жанре R'n'B`,
    answers: [
      { src: songs[3].src, genre: songs[3].genre },
      { src: songs[1].src, genre: songs[1].genre },
      { src: songs[4].src, genre: songs[4].genre },
      { src: songs[5].src, genre: songs[5].genre }
    ]
  },
  {
    type: `genre`,
    genre: `Jazz`,
    question: `Выберите все джазовые песни`,
    answers: [
      { src: songs[3].src, genre: songs[3].genre },
      { src: songs[1].src, genre: songs[1].genre },
      { src: songs[4].src, genre: songs[0].genre },
      { src: songs[5].src, genre: songs[5].genre }
    ]
  },
  {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Пелагея1`,
        isCorrect: false
      },
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Краснознамённая дивизия имени моей Бабушки1`,
        isCorrect: false
      },
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Кровосток1`,
        isCorrect: true
      }
    ]
  },
  {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Пелагея1`,
        isCorrect: false
      },
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Краснознамённая дивизия имени моей Бабушки1`,
        isCorrect: false
      },
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 300,
          height: 300
        },
        title: `Кровосток1`,
        isCorrect: true
      }
    ]
  }
];

export {GAME_SETTINGS, initialState, currentPlayer, questions};
