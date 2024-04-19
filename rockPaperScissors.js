document.getElementById("startGame").addEventListener("click", function() {
    playGame(); // Call the playGame function when the button is clicked
  });
  
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
  
  function playRound(promptMessage) {
    let player = prompt(promptMessage);
    let computer = getComputerChoice();
  
    console.log(`Player Choice: ${player}`);
    console.log(`Computer Choice: ${computer}`);
  
    switch (player.toLowerCase()) {
      case "rock":
        if (computer === "scissors") {
          return "Player Wins!";
        } else if (computer === "rock") {
          return "It's a Tie!";
        } else {
          return "Computer Wins!";
        }
  
      case "paper":
        if (computer === "rock") {
          return "Player Wins!";
        } else if (computer === "paper") {
          return "It's a Tie!";
        } else {
          return "Computer Wins!";
        }
  
      case "scissors":
        if (computer === "paper") {
          return "Player Wins!";
        } else if (computer === "scissors") {
          return "It's a Tie!";
        } else {
          return "Computer Wins!";
        }
  
      default:
        return "Invalid Choice!";
    }
  }
  
  // console.log(playRound());
  // console.log("----------------------");
  
  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    let round1 = playRound("Round 1:\nRock, Paper, or Scissors?");
  
    if (round1.includes("Player Wins!")) {
      playerScore++;
      console.log(`Player Score = ${playerScore}`);
    } else if (round1.includes("Computer Wins!")) {
      computerScore++;
      console.log(`Computer Score = ${computerScore}`);
    } else {
      console.log("No change in Score");
    }
  
    console.log(round1);
    console.log({ playerScore, computerScore });
  
    console.log("--------------------------");
  
    if (prompt("Do you wish to continue?") === "no" || prompt === null){
      return { playerScore, computerScore };
    }
  
    console.log("--------------------------");
  
    let round2 = playRound("Round 2:\nRock, Paper, or Scissors?");
  
    if (round2.includes("Player Wins!")) {
      playerScore++;
      console.log(`Player Score = ${playerScore}`);
    } else if (round2.includes("Computer Wins!")) {
      computerScore++;
      console.log(`Computer Score = ${computerScore}`);
    } else {
      console.log("No change in Score");
    }
  
    console.log(round2);
    console.log({ playerScore, computerScore });
  
    console.log("--------------------------");
  
    if (prompt("Do you wish to continue?") === "no" || prompt === null){
      return { playerScore, computerScore };
    }
  
    console.log("--------------------------");
  
    let round3 = playRound("Round 3:\nRock, Paper, or Scissors?");
  
    if (round3.includes("Player Wins!")) {
      playerScore++;
      console.log(`Player Score = ${playerScore}`);
    } else if (round3.includes("Computer Wins!")) {
      computerScore++;
      console.log(`Computer Score = ${computerScore}`);
    } else {
      console.log("No change in Score");
    }
  
    console.log(round3);
    console.log({ playerScore, computerScore });
  
    console.log("--------------------------");
  
    if (prompt("Do you wish to continue?") === "no" || prompt === null){
      return { playerScore, computerScore };
    }
  
    console.log("--------------------------");
  
    let round4 = playRound("Round 4:\nRock, Paper, or Scissors?");
  
    if (round4.includes("Player Wins!")) {
      playerScore++;
      console.log(`Player Score = ${playerScore}`);
    } else if (round4.includes("Computer Wins!")) {
      computerScore++;
      console.log(`Computer Score = ${computerScore}`);
    } else {
      console.log("No change in Score");
    }
  
    console.log(round4);
    console.log({ playerScore, computerScore });
  
    console.log("--------------------------");
  
    if (prompt("Do you wish to continue?") === "no" || prompt === null){
      return { playerScore, computerScore };
    }
  
    console.log("--------------------------");
  
    let round5 = playRound("Round 5:\nRock, Paper, or Scissors?");
  
    if (round5.includes("Player Wins!")) {
      playerScore++;
      console.log(`Player Score = ${playerScore}`);
    } else if (round2.includes("Computer Wins!")) {
      computerScore++;
      console.log(`Computer Score = ${computerScore}`);
    } else {
      console.log("No change in Score");
    }
  
    console.log(round5);
    console.log({ playerScore, computerScore });
  
    console.log("--------------------------");
  
  
    if(playerScore > computerScore){
      return "Player Wins!"
    }else if(computerScore > playerScore){
      return "Computer Wins!"
    }else{
      return "It's a tie!"
    }
  }
  
  // console.log(playGame());