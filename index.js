let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("choose between ROCK, PAPER, SCISSORS");
  return humanChoice.toUpperCase();
}

function checkWinner(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    return `Tie, you both chose ${computerSelection}`;
  } else if (
    (humanSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (humanSelection == "PAPER" && computerSelection == "ROCK") ||
    (humanSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    return `You Win, ${humanSelection} beats ${computerSelection}`;
  } else {
    return `You Lose, ${computerSelection} beats ${humanSelection}`;
  }
}

function playRound() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = checkWinner(humanSelection, computerSelection);

  if (result.includes("Tie")) {
    console.log(`Tie, you both chose ${computerSelection}`);
  } else if (result.includes("You Win")) {
    humanScore++;
    console.log(`You won ${humanSelection} beats ${computerSelection}`);
    console.log(`human score: ${humanScore}, computer score: ${computerScore}`);
  } else {
    computerScore++;
    console.log(`You lost ${computerSelection} beats ${humanSelection}`);
    console.log(`human score: ${humanScore}, computer score: ${computerScore}`);
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log("Round:", i);
    playRound();
  }
  if (humanScore > computerScore) {
    console.log("You won the game!", `human score: ${humanScore}, computer score: ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log("You lost the game!", `human score: ${humanScore}, computer score: ${computerScore}`);
  } else {
    console.log("It's a tie game!", `human score: ${humanScore}, computer score: ${computerScore}`);
  }
}

playGame();