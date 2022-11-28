// Time to try and build a web version of your Tic Tac Toe game
// You will want to have 9 boxes that a user can click on
// - Depending on the user turn the clicked box should change to X or O
// - A User should only be able to select one box per turn
// - A User should not be able to select a box that is already selected
// - When game is over (whether a win or tie) the users should be prompted to play again and the game should be reset

//event.preventdefault

let gamePiece = "";
let playerTurn = true;
let text = document.getElementById("text");
let xScore = document.getElementById("xScore");
let oScore = document.getElementById("oScore");
const xGamePiece = "X";
const oGamePiece = "O";
const gameSpaces = document.querySelectorAll(".gameSpace");
const restart = document.getElementById("restart");

restart.addEventListener("click", clearGameBoard);
gameSpaces.forEach(addEventListenerToGameSpaces);

document.addEventListener("keydown", enterKeyDisable);

text.innerHTML = "Player X turn";

function enterKeyDisable(event) {
  if (event.keyCode == "13") {
    console.log("disableEnter");
    event.preventDefault();
  }
}

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
  }
  return false;
}

function checkDraw() {
  if (
    gameSpaces[0].innerHTML !== "" &&
    gameSpaces[1].innerHTML !== "" &&
    gameSpaces[2].innerHTML !== "" &&
    gameSpaces[3].innerHTML !== "" &&
    gameSpaces[4].innerHTML !== "" &&
    gameSpaces[5].innerHTML !== "" &&
    gameSpaces[6].innerHTML !== "" &&
    gameSpaces[7].innerHTML !== "" &&
    gameSpaces[8].innerHTML !== ""
  ) {
    return true;
  }
  return false;
}

function disableGameSpaces(trueFalse) {
  gameSpaces.forEach((space) => (space.disabled = trueFalse));
}

function clearGameBoard(event) {
  if (
    text.innerHTML === "PLAYER " + xGamePiece + " WINS!" ||
    text.innerHTML === "DRAW!"
  ) {
    text.innerHTML = "Player X turn";
  }
  if (text.innerHTML === "PLAYER " + oGamePiece + " WINS!") {
    text.innerHTML = "Player O turn";
  }

  gameSpaces.forEach((space) => (space.innerHTML = ""));
  disableGameSpaces(false);
}

function insertPlayerXName(userInput) {
  let p1Name = document.getElementById("P1Name");
  let inputName = document.getElementById("P1NameInput").value;

  p1Name.innerHTML = inputName;
}

function insertPlayerOName(userInput) {
  let p2Name = document.getElementById("P2Name");
  let input2Name = document.getElementById("P2NameInput").value;

  p2Name.innerHTML = input2Name;
}

function keepScore(gamePiece) {
  if (gamePiece === xGamePiece) {
    xScore.innerHTML = Number(xScore.innerHTML) + 1;
  } else if (gamePiece === oGamePiece) {
    oScore.innerHTML = Number(oScore.innerHTML) + 1;
  }
}

function useGamePiece(event) {
  playerTurn ? (gamePiece = xGamePiece) : (gamePiece = oGamePiece);

  event.target.innerHTML = gamePiece;
  event.target.disabled = true;
  if (checkWin()) {
    text.innerHTML = "PLAYER " + gamePiece + " WINS!";
    keepScore(gamePiece);
    disableGameSpaces(true);
  } else if (checkDraw()) {
    text.innerHTML = "DRAW!";
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
