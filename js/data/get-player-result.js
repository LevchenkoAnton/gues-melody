const resultMessages = {
  remainingTime: `Время вышло! Вы не успели отгадать все мелодии`,
  remainingNotes: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  success(currentPlayerPlace, players, defeatedPlayers) {
    return `Вы заняли ${currentPlayerPlace} место из ${players} игроков. Это лучше, чем у ${defeatedPlayers}% игроков.`;
  }
};

const getPlayerResult = (otherPlayersResult, currentPlayerResult) => {

  if (currentPlayerResult.remainingTime === 0) {
    return resultMessages.remainingTime;
  }

  if (currentPlayerResult.remainingNotes < 0) {
    return resultMessages.remainingNotes;
  }

  let playerStat = otherPlayersResult.slice();
  playerStat.push(currentPlayerResult.score);

  const currentPlayerWins = playerStat.filter(result => result < currentPlayerResult.score).length;
  const currentPlayerPlace = playerStat.length - currentPlayerWins;
  const defeatedPlayers = Math.round(currentPlayerWins / playerStat.length * 100);

  return resultMessages.success(currentPlayerPlace, playerStat.length, defeatedPlayers);

};

export {getPlayerResult as default, resultMessages};
