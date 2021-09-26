// Query Selectors

// var boardContainer = document.querySelector('#boardContainer');
var boardIconContainer = document.querySelector('.box');
var iconContainer = document.querySelector('.icon-container');
var vampIcon = document.querySelector('#vamp');
var skullIcon = document.querySelector('#skull');
// var boxOne = document.querySelector('.one');



// Event Listeners

boardIconContainer.addEventListener('click', clickTargetBox);


// Functions

function clickTargetBox() {
  // if (event.target.classList.contains('box')) {
    console.log(event);
    skullIcon.classList.remove('hidden');
    vampIcon.classList.add('hidden');
    iconContainer.innerHTML += `<img class="vamplips-icon" src="./assets/vamplips.svg" alt="red vampire lips">`
  // }
}
// make a div for each article to hold the icon
// query select the article container for each div with event.target


// `<img class="skull-icon" src="./assets/purzen_skull.svg" alt="white human skull">`
// `<img class="vamplips-icon" src="./assets/vamplips.svg" alt="red vampire lips">`
