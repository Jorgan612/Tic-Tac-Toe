class Game {
  constructor() {
    this.player1 = new Player('ghoul1', '🦇');
    this.player2 = new Player('ghoul2', '💀');
    this.turn = this.player1;
    this.player1Moves = [];
    this.player2Moves = [];
}

trackPlayerData(target) {
if (this.turn === this.player1) {
  this.player1Moves.push(parseInt(target.id));
} else {
  this.player2Moves.push(parseInt(target.id));
  }
}

trackPlayerTurn() {
  if (this.turn === this.player1) {
    this.turn = this.player2
  } else if (this.turn === this.player2) {
    this.turn = this.player1
    }
  }

  checkWinningConditions(target) {
    var winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4 ,7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winningConditions.length; i++) {
      if (this.player1Moves.includes(winningConditions[i][0])
        && this.player1Moves.includes(winningConditions[i][1])
        && this.player1Moves.includes(winningConditions[i][2])) {
          this.player1.player1Wins++;
          game.player1.saveWinsToStorage();
          ghoul1Wins();
        } else if (this.player2Moves.includes(winningConditions[i][0])
          && this.player2Moves.includes(winningConditions[i][1])
          && this.player2Moves.includes(winningConditions[i][2])) {
            this.player2.player2Wins++;
            game.player2.saveWinsToStorage();
            ghoul2Wins();
        } else if ((this.player1Moves.length + this.player2Moves.length) === 9) {
          drawGame();
          return;
        }
    }
}

  resetGame() {
    this.player1Moves = [];
    this.player2Moves = [];
  }
};
