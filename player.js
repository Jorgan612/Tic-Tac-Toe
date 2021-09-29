class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.player1Wins = 0;
    this.player2Wins = 0;
  }
  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(game);
    localStorage.setItem('gameWins', stringifiedWins);
  }
  retrieveWinsFromStorage() {

  }

};
