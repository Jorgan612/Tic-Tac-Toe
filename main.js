// Query Selectors
var boardContainer = document.querySelector('#boardContainer');
var boardArticle = document.querySelector('article');
var vampIcon = document.querySelector('#vamp');
var skullIcon = document.querySelector('#skull');
var skullWin = document.querySelector('#skullWin');
var vampWin = document.querySelector('#vampWin');
var vampTotalWins = document.querySelector('#vampTotalWins')
var boxZero = document.getElementById('0');
var boxOne = document.getElementById('1');
var boxTwo = document.getElementById('2');
var boxThree = document.getElementById('3');
var boxFour = document.getElementById('4');
var boxFive = document.getElementById('5');
var boxSix = document.getElementById('6');
var boxSeven = document.getElementById('7');
var boxEight = document.getElementById('8');

var boxes = [boxZero, boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight];
var game = new Game();

// Event Listeners

boardContainer.addEventListener('click', function(event) {
  var target = event.target;
  if (target.matches('article')) {
    clickTargetBox(target);
  }
});

// Functions

function clickTargetBox(target) {
  // console.log(target)
  if (target.innerHTML !== "") {
    return;
  } else {
    game.trackPlayerData(target);
    game.trackPlayerTurn();
    ghoulTurn(target);
    game.checkWinningConditions(target);
    }
  }

function ghoulTurn(target) {
  if (game.turn === game.player2) {
    target.innerText = '🦇';
    skullIcon.classList.remove('hidden');
    vampIcon.classList.add('hidden');
  } else {
    target.innerText = '💀';
    skullIcon.classList.add('hidden');
    vampIcon.classList.remove('hidden');
  }
}

function ghoul1Wins(target) {
  skullIcon.classList.add('hidden');
  vampIcon.classList.add('hidden');
  vampWin.classList.remove('hidden');
  // need to figure out a way to access player wins from class
  vampTotalWins.innerText = `Wins: ${game.player1.wins}`;
  // invoke board reset function
  // resetBoard(); DOESN'T WORK
};

function ghoul2Wins(target) {
  skullIcon.classList.add('hidden');
  vampIcon.classList.add('hidden');
  skullWin.classList.remove('hidden');
  skullTotalWins.innerText = `Wins: ${game.player2.wins}`;
  // invoke board reset function
  // resetBoard(); DOESN'T WORK
};

// doesn't work vvvvvv
function resetBoard(target) {
  target.innerText = "";
};
