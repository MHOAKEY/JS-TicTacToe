// Time to try and build a web version of your Tic Tac Toe game
// You will want to have 9 boxes that a user can click on
// - Depending on the user turn the clicked box should change to X or O
// - A User should only be able to select one box per turn
// - A User should not be able to select a box that is already selected
// - When game is over (whether a win or tie) the users should be prompted to play again and the game should be reset

let gamePiece = "";
let playerTurn = true;
let text = document.getElementById("text");
const xGamePiece = "X";
const oGamePiece = "O";
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const gameSpaces = document.querySelectorAll(".gameSpace");

gameSpaces.forEach(addEventListenerToGameSpaces);

text.innerHTML += "Player X turn";

function addEventListenerToGameSpaces(gameSpace) {
  gameSpace.addEventListener("click", useGamePiece);
}

function checkWin() {
  if (
    gameSpaces[0].innerHTML === gameSpaces[1].innerHTML &&
    gameSpaces[1].innerHTML === gameSpaces[2].innerHTML &&
    gameSpaces[0].innerHTML !== ""
  ) {
    return true;
  }

  if (
    gameSpaces[3].innerHTML === gameSpaces[4].innerHTML &&
    gameSpaces[4].innerHTML === gameSpaces[5].innerHTML &&
    gameSpaces[3].innerHTML !== ""
  ) {
    return true;
  }
  if (
    gameSpaces[6].innerHTML === gameSpaces[7].innerHTML &&
    gameSpaces[7].innerHTML === gameSpaces[8].innerHTML &&
    gameSpaces[6].innerHTML !== ""
  ) {
    return true;
  }
  if (
    gameSpaces[0].innerHTML === gameSpaces[3].innerHTML &&
    gameSpaces[3].innerHTML === gameSpaces[6].innerHTML &&
    gameSpaces[0].innerHTML !== ""
  ) {
    return true;
  }
  if (
    gameSpaces[1].innerHTML === gameSpaces[4].innerHTML &&
    gameSpaces[4].innerHTML === gameSpaces[7].innerHTML &&
    gameSpaces[1].innerHTML !== ""
  ) {
    return true;
  }
  if (
    gameSpaces[2].innerHTML === gameSpaces[5].innerHTML &&
    gameSpaces[5].innerHTML === gameSpaces[8].innerHTML &&
    gameSpaces[2].innerHTML !== ""
  ) {
    return true;
  }
  if (
    gameSpaces[0].innerHTML === gameSpaces[4].innerHTML &&
    gameSpaces[4].innerHTML === gameSpaces[8].innerHTML &&
    gameSpaces[0].innerHTML !== ""
  ) {
    return true;
  }
  if (
    gameSpaces[2].innerHTML === gameSpaces[4].innerHTML &&
    gameSpaces[4].innerHTML === gameSpaces[6].innerHTML &&
    gameSpaces[2].innerHTML !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

function useGamePiece(event) {
  if (playerTurn === true) {
    gamePiece = xGamePiece;
  }
  if (playerTurn === false) {
    gamePiece = oGamePiece;
  }

  event.target.innerHTML = gamePiece;
  if (checkWin()) {
    text.innerHTML = "PLAYER " + gamePiece + " WINS!";
  } else {
    if (gamePiece === xGamePiece) {
      playerTurn = false;
      text.innerHTML = "Player " + oGamePiece + " turn";
    }
    if (gamePiece === oGamePiece) {
      playerTurn = true;
      text.innerHTML = "Player " + xGamePiece + " turn";
    }
  }
}
