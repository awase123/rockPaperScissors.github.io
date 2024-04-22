const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");

let playerScore = 0;
let computerScore = 0;
let newDiv = null;

document.body.appendChild(playerScoreDisplay);
document.body.appendChild(computerScoreDisplay);

playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

rock.addEventListener("click", () => {
  playGame("rock");
});
paper.addEventListener("click", () => {
  playGame("paper");
});
scissors.addEventListener("click", () => {
  playGame("scissors");
});

function updateScoreDisplays() {
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function getComputerChoice() {
  compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame(choice) {
  if (newDiv) {
    newDiv.remove();
  }
  newDiv = document.createElement("div");
  document.body.appendChild(newDiv);

  let player = choice;
  let computer = getComputerChoice();

  console.log(`Player Choice: ${player}`);
  console.log(`Computer Choice: ${computer}`);

  let result;

  switch (player) {
    case "rock":
      if (computer === "scissors") {
        result = "Player Wins!";
        playerScore++;
      } else if (computer === "rock") {
        result = "It's a Tie!";
      } else {
        result = "Computer Wins!";
        computerScore++;
      }
      break;

    case "paper":
      if (computer === "rock") {
        result = "Player Wins!";
        playerScore++;
      } else if (computer === "paper") {
        result = "It's a Tie!";
      } else {
        result = "Computer Wins!";
        computerScore++;
      }
      break;

    case "scissors":
      if (computer === "paper") {
        result = "Player Wins!";
        playerScore++;
      } else if (computer === "scissors") {
        result = "It's a Tie!";
      } else {
        result = "Computer Wins!";
        computerScore++;
      }
      break;
    default:
      result = "Invalid Choice!";
      break;
  }
  newDiv.textContent = result;
  updateScoreDisplays();

  if (playerScore === 5) {
    alert("Player Wins Game!");
  } else if (computerScore === 5) {
    alert("Computer Wins Game!");
  }
}
