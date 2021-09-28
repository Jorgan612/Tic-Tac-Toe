var boardSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Game {
  constructor() {
    this.player1 = new Player('ghoul1', '🦇');
    this.player2 = new Player('ghoul2', '💀');
    this.turn = this.player1;
    this.board = boardSpaces;
    this.playerMoves = [];
}
trackVampData(target) {
 var vampToken = this.player1.token;
 var skullToken = this.player2.token;
 var boardIndex = boardSpaces.indexOf(parseInt(target.id));
console.log(boardIndex);
 if (boardIndex !== -1) {
   // may not need above conditional check board
   if (this.turn === this.player1) {
     this.playerMoves[boardIndex] = vampToken;
   } else {
     this.playerMoves[boardIndex] = skullToken;
   }
   // this.vampMoves.splice(boardIndex, 0, vampToken);
   // boardIndex = boardSpaces.indexOf(vampToken, boardIndex + 1)
   console.log(this.playerMoves)
   console.log(boardSpaces)
   // console.log(vampMoves)
   // NOTES:
   // DO NOT NEED A SEPERATE SKULLDATA METHOD
   // MIGHT NOT NEED LIKE 16 CONDITIONAL- CHECK IF IT WORKS TOMORROW
   // REVIEW INDEXOf and parseInt info!
   // Tuesday GOALS:
   // find a way to connect / compare the playerMoves array with the
   // winningConditions array!
   // work on local storage
 }
 return vampMoves;
}
trackPlayerTurn() {
  if (this.turn === this.player1) {
    this.turn = this.player2
  } else if (this.turn === this.player2) {
    this.turn = this.player1
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
checkForWin() {

}
resetBoard() {

  }
};

// var vampPlayer = new Player(ghoul1);
// var skullPlayer = new Player(ghoul2);
