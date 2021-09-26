class Game {
  constructor() {
    this.player1 = new Player('ghoul1', '🦇');
    this.player2 = new Player('ghoul2', '💀');
    this.turn = this.player1;
  }
  trackPlayerTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2
      ghoulOneTurn();
    } else if (this.turn === this.player2) {
      this.turn = this.player1
      ghoulTwoTurn();
    }
  }
  winningConditions() {
    var winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4 ,7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

};

// var vampPlayer = new Player(ghoul1);
// var skullPlayer = new Player(ghoul2);
