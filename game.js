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
  console.log(target)
  console.log(this.player1Moves)
  console.log(this.player1.wins)
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
    var winningConditions = [[0, 1, 2], [2, 1, 0], [5, 4, 3], [3, 4, 5], [6, 7, 8], [8, 7, 6], [6, 3 ,0], [0, 3, 6], [7, 4, 1], [1, 4 ,7], [8, 5, 2], [2, 5, 8], [8, 4, 0], [0, 4, 8], [6, 4, 2], [2, 4, 6]];
    for (var i = 0; i < winningConditions.length; i++) {
      if (winningConditions[i][0] === this.player1Moves[0]
        && winningConditions[i][1] === this.player1Moves[1]
        && winningConditions[i][2] === this.player1Moves[2]) {
          this.player1.wins++;
          console.log(this.player1.wins)
          ghoul1Wins();
          console.log('ghoul one wins');
        } else if (winningConditions[i][0] === this.player2Moves[0]
          && winningConditions[i][1] === this.player2Moves[1]
          && winningConditions[i][2] === this.player2Moves[2]){
            ghoul2Wins();
          console.log('ghoul two wins');
        }
    }
}
checkForDraw() {

  }
};

// var vampPlayer = new Player(ghoul1);
// var skullPlayer = new Player(ghoul2);
