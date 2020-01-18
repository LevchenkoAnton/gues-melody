import assert from 'assert';
import getPlayerScore from './get-player-score';

let answers = [];

suite(`Player result`, () => {

  test(`All low answers`, () => {
    answers = [
      {correctly: true, time: 31},
      {correctly: true, time: 32},
      {correctly: true, time: 33},
      {correctly: true, time: 34},
      {correctly: true, time: 35},
      {correctly: true, time: 36},
      {correctly: true, time: 37},
      {correctly: false, time: 38},
      {correctly: false, time: 39},
      {correctly: false, time: 40}
    ];

    assert.equal(getPlayerScore(answers, 2), 1);
  });

  test(`Some fast answer`, () => {
    answers = [
      {correctly: true, time: 10},
      {correctly: true, time: 15},
      {correctly: true, time: 20},
      {correctly: true, time: 25},
      {correctly: true, time: 30},
      {correctly: true, time: 40},
      {correctly: true, time: 50},
      {correctly: false, time: 30},
      {correctly: false, time: 40},
      {correctly: false, time: 50}
    ];

    assert.equal(getPlayerScore(answers, 2), 6);
  });

  test(`Not all answers`, () => {
    answers = [
      {correctly: true, time: 3},
      {correctly: false, time: 5},
      {correctly: false, time: 7},
      {correctly: true, time: 9},
      {correctly: false, time: 11},
      {correctly: true, time: 14},
      {correctly: false, time: 16}
    ];

    assert.equal(getPlayerScore(answers, 2), -1);
  });

  test(`No notes parameter`, () => {
    answers = [
      {correctly: true, time: 3},
      {correctly: false, time: 25},
      {correctly: false, time: 7},
      {correctly: false, time: 5},
      {correctly: true, time: 9},
      {correctly: false, time: 11},
      {correctly: false, time: 5},
      {correctly: true, time: 34},
      {correctly: true, time: 14},
      {correctly: false, time: 16}
    ];

    assert.equal(getPlayerScore(answers, -1), -1);
  });

});
