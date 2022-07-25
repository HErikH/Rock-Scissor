let move = 10;
let playerScore = 0;
let computerScore = 0;

// buttons
let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
// score
let table = document.getElementById("table");
let movesLeft = document.getElementById("movesLeft");
let computerCount = document.getElementById("cCount");
let playerCount = document.getElementById("pCount");
//
let computerChoose = ["rock", "scissor", "paper"];

window.onload = function () {

  function run(playerChoose) {

    move--;
    movesLeft.innerText = move;

    let result = Math.floor(Math.random() * 3);

    if (playerChoose == computerChoose[result]) {
      table.innerText = "Draw !";
      table.style.display = "flex";
      setTimeout(() => {
        table.style.display = "none";
      }, 1000);
    } else if (playerChoose == "rock") {
      if (computerChoose[result] == "paper") {
        computerScore++;
        computerCount.innerText = computerScore;
        table.innerText = "Computer won !";
        table.style.display = "flex";
        setTimeout(() => {
          table.style.display = "none";
        }, 1000);
      } else {
        playerScore++;
        playerCount.innerText = playerScore;
        table.innerText = "Player won !";
        table.style.display = "flex";
        setTimeout(() => {
          table.style.display = "none";
        }, 1000);
      }
    } else if (playerChoose == "scissor") {
      if (computerChoose[result] == "rock") {
        computerScore++;
        computerCount.innerText = computerScore;
        table.innerText = "Computer won!";
        table.style.display = "flex";
        setTimeout(() => {
          table.style.display = "none";
        }, 1000);
      } else {
        playerScore++;
        playerCount.innerText = playerScore;
        table.innerText = "Player won !";
        table.style.display = "flex";
        setTimeout(() => {
          table.style.display = "none";
        }, 1000);
      }
    } else if (playerChoose == "paper") {
      if (computerChoose[result] == "scissor") {
        computerScore++;
        computerCount.innerText = computerScore;
        table.innerText = "Computer won !";
        table.style.display = "flex";
        setTimeout(() => {
          table.style.display = "none";
        }, 1000);
      } else {
        playerScore++;
        playerCount.innerText = playerScore;
        table.innerText = "Player won !";
        table.style.display = "flex";
        setTimeout(() => {
            table.style.display = "none";
        }, 1000);
      }
    }

    if (move == 0) {
      if (playerScore > computerScore) {
        table.innerText = `Player won with ${playerScore} score !`
        table.style.display = "flex";
        setTimeout(() => {
            table.style.display = "none";
        }, 1000);
        move = 10;
        playerScore = 0;
        computerScore = 0;
        movesLeft.innerText = move;
        playerCount.innerText = playerScore;
        computerCount.innerText = computerScore;
      } else {
        table.innerText = `Computer won with ${computerScore} score !`
        move = 10;
        playerScore = 0;
        computerScore = 0;
        movesLeft.innerText = move;
        playerCount.innerText = playerScore;
        computerCount.innerText = computerScore;
      }
    }
  }

  rock.onclick = function () {
    run("rock");
  };
  scissor.onclick = function () {
    run("scissor");
  };
  paper.onclick = function () {
    run("paper");
  };
};
