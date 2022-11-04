// Time to try and build a web version of your Tic Tac Toe game
// You will want to have 9 boxes that a user can click on
// - Depending on the user turn the clicked box should change to X or O
// - A User should only be able to select one box per turn
// - A User should not be able to select a box that is already selected
// - When game is over (whether a win or tie) the users should be prompted to play again and the game should be reset

let gamePiece = "";
let playerTurn = true;
let text = document.getElementById("text");
const gameSpaces = document.querySelectorAll(".gameSpace");

gameSpaces.forEach(addEventListenerToGameSpaces);

text.innerHTML += "Player X turn.";

function addEventListenerToGameSpaces(gameSpace) {
  gameSpace.addEventListener("click", useGamePiece);
}

function useGamePiece(event) {
  if (playerTurn === true) {
    gamePiece = "X";
  }
  if (playerTurn === false) {
    gamePiece = "O";
  }

  event.target.innerHTML = gamePiece;

  if (gamePiece === "X") {
    playerTurn = false;
    text.innerHTML = "Player O Turn";
  }
  if (gamePiece === "O") {
    playerTurn = true;
    text.innerHTML = "Player X Turn";
  }
}
