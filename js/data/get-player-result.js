const getPlayerResult = (otherPlayersResult, currentPlayerResult) => {

  if (currentPlayerResult.remainingTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (currentPlayerResult.remainingNotes < 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  let playerStat = otherPlayersResult.slice();
  playerStat.push(currentPlayerResult.score);

  const currentPlayerWins = playerStat.filter(result => result < currentPlayerResult.score).length;
  const currentPlayerPlace = playerStat.length - currentPlayerWins;
  const defeatedPlayers = Math.round(currentPlayerWins / playerStat.length * 100);

  return `Вы заняли ${currentPlayerPlace} место из ${playerStat.length} игроков. Это лучше, чем у ${defeatedPlayers}% игроков.`;

};

export default getPlayerResult;
