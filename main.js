// Query Selectors

var boardContainer = document.querySelector('#boardContainer');
// var boardIconContainer = document.querySelectorAll('.box');
var boardArticle = document.querySelector('article');
var vampIcon = document.querySelector('#vamp');
var skullIcon = document.querySelector('#skull');
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

var vampMoves = [];
// var skullMoves = [];


// Event Listeners

boardContainer.addEventListener('click', function(event) {
  var target = event.target;
  if (target.matches('article')) {
    clickTargetBox(target);
  }
});

// Functions

function clickTargetBox(target) {
  console.log(target)
  if (target.innerHTML !== "") {
    return;
  } else {
    game.trackVampData(target);
    game.trackPlayerTurn();
    ghoulTurn(target);
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


// `<img class="skull-icon" src="./assets/purzen_skull.svg" alt="white human skull">`
// `<img class="vamplips-icon" src="./assets/vamplips.svg" alt="red vampire lips">`
