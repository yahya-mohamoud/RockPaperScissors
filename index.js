let computerScore = 0;
let humanScore = 0;
const p = document.createElement("p");
const outcomeDiv = document.querySelector(".outcomes");
const h2 = document.createElement("h2");
const buttonReset = document.querySelector(".reset")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

function getComputerChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}
p.setAttribute("style", "display: flex; margin-left: 18px; font-weight: bolder");


const checkWinner = (humanScore, computerScore) => {
  if (humanScore === 5 && computerScore < 5) {
    h2.innerText = `you won ${humanScore} to ${computerScore} `;

    outcomeDiv.appendChild(h2);
  } else if (computerScore === 5 && humanScore < 5) {
    h2.innerText = `you lost ${humanScore} to ${computerScore} `;
    h2.setAttribute("style", "display: flex; justify-content: center; align-items:center;");

    outcomeDiv.appendChild(h2);
  }
};

buttonReset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  computerScoreSpan.innerText = `computerScore: ${computerScore}`;
  playerScoreSpan.innerText = `playerScore: ${humanScore}`;
  outcomeDiv.removeChild(h2);
  p.innerText = "";
});

outcomeDiv.appendChild(p);



function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    p.innerText = `Tie, you both chose ${computerSelection}`;
  } else if (
    (humanSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (humanSelection == "PAPER" && computerSelection == "ROCK") ||
    (humanSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    humanScore++;
    console.log(humanScore);
    p.innerText = `You Win, ${humanSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    p.innerText = `You Lose, ${computerSelection} beats ${humanSelection}`;
  }
}

const updateScores = (humanScore, computerScore) => {
  computerScoreSpan.innerText = `ComputerScore: ${computerScore}`;
  playerScoreSpan.innerText = `PlayerScore: ${humanScore}`;
  playerScoreSpan.setAttribute("style", "margin: 0px 15px 10px; text-transform: UpperCase; font-weight: bolder")
  computerScoreSpan.setAttribute("style", "margin: 0px 15px 10px; text-transform: UpperCase; font-weight: bolder")

  }
  updateScores(computerScore, humanScore);

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorBtn = document.querySelector(".scissorsBtn");

rockBtn.innerHTML = "<img src='img/white_circle.png' >";
paperBtn.innerHTML = "<img src='img/scroll.png' >";
scissorBtn.innerHTML = "<img src='img/scissors.png' >";

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "ROCK";
  playRound(humanSelection, computerSelection);
  checkWinner(humanScore, computerScore);
  updateScores(humanScore, computerScore)
});

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "PAPER";
  playRound(humanSelection, computerSelection);
  checkWinner(humanScore, computerScore);
  updateScores(humanScore, computerScore);
});

scissorBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "SCISSORS";
  playRound(humanSelection, computerSelection);
  checkWinner(humanScore, computerScore);
  updateScores(humanScore, computerScore);
});