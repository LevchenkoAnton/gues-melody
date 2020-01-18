import assert from 'assert';
import getPlayerResult from "./get-player-result";

const statistics = [4, 5, 8, 10, 11, 17, 20];
let playerResult = {};

suite(`Player result`, () => {

  test(`Player successful finish game`, () => {
    playerResult = {
      score: 15,
      remainingNotes: 2,
      remainingTime: 10
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      `Вы заняли 3 место из 8 игроков. Это лучше, чем у 63% игроков.`
      );
  });

  test(`Player score is equal with other player`, () => {
    playerResult = {
      score: 10,
      remainingNotes: 2,
      remainingTime: 10
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      `Вы заняли 5 место из 8 игроков. Это лучше, чем у 38% игроков.`
    );
  });

  test(`Attempts are over`, () => {
    playerResult = {
      score: 10,
      remainingNotes: -1,
      remainingTime: 10
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
    );
  });

  test(`time is over`, () => {
    playerResult = {
      score: 10,
      remainingNotes: 2,
      remainingTime: 0
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      `Время вышло! Вы не успели отгадать все мелодии`
    );
  });

});
