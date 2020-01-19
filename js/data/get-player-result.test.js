import assert from 'assert';
import getPlayerResult, {resultMessages} from "./get-player-result";

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
      resultMessages.success(3, 8, 63)
    );
  });

  test(`Player score is equal with other player`, () => {
    playerResult = {
      score: 10,
      remainingNotes: 2,
      remainingTime: 10
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      resultMessages.success(5, 8, 38)
    );
  });

  test(`Attempts are over`, () => {
    playerResult = {
      score: 10,
      remainingNotes: -1,
      remainingTime: 10
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      resultMessages.remainingNotes
    );
  });

  test(`Time is over`, () => {
    playerResult = {
      score: 10,
      remainingNotes: 2,
      remainingTime: 0
    };

    assert.equal(getPlayerResult(statistics, playerResult),
      resultMessages.remainingTime
    );
  });

});
