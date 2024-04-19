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
    
    if(playerScore > computerScore){
      return "Player Wins!"
    }else if(computerScore > playerScore){
      return "Computer Wins!"
    }else{
      return "It's a tie!"
    }
  }
  
  // console.log(playGame());