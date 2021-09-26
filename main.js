// Query Selectors

var boardContainer = document.querySelector('#boardContainer');
var boardIconContainer = document.querySelector('.box');
var vampIcon = document.querySelector('#vamp');
var skullIcon = document.querySelector('#skull');

// is this needed to determine current ghoul?
var game = new Game();


// Event Listeners

boardIconContainer.addEventListener('click', clickTargetBox);


// Functions

function clickTargetBox() {
  if (event.target.classList.contains('box')) {
    game.trackPlayerTurn();
 console.log(event.target)
  }
}

function ghoulOneTurn() {
  skullIcon.classList.remove('hidden');
  vampIcon.classList.add('hidden');
  boardIconContainer.innerHTML += `<p>🦇</p>`
}

function ghoulTwoTurn() {
  skullIcon.classList.add('hidden');
  vampIcon.classList.remove('hidden');
  boardIconContainer.innerHTML += `<p>💀</p>`
}



// `<img class="skull-icon" src="./assets/purzen_skull.svg" alt="white human skull">`
// `<img class="vamplips-icon" src="./assets/vamplips.svg" alt="red vampire lips">`
