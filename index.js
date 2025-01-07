
const rockBtn = document.querySelector(".rockBtn")
const paperBtn = document.querySelector(".paperBtn")
const scissorsBtn = document.querySelector(".scissorsBtn")
const display = document.querySelector(".display")
const scorePlc = document.querySelector(".score")
const resetBtn = document.querySelector("button")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * choices.length + 1)

    let computer = (computerChoice == 1) ? computerChoice = "rock" : computerChoice == 2 ?
        computerChoice = "paper" : computerChoice = "scissors"
    return computerChoice;

}

// getComputerChoice()


const hmnScr = document.createElement("h3")
const paraOne = document.createElement("h3")
paraOne.textContent = `Human score: 0  Computer score: 0`;
const win = document.createElement("h2")
const GameScorePlc = document.createElement("h3")
GameScorePlc.classList.add("gameScorePlc")

GameScorePlc.textContent = "Rounds won by human: 0 and by computer: 0"

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        hmnScr.textContent = "It's a tie game"
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        paraOne.textContent = "0"
        paraOne.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

        hmnScr.textContent = `you win ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;

        paraOne.textContent = `Human score:${humanScore} Computer score: ${computerScore}`;

        hmnScr.textContent = `you lose ${computerChoice} beats ${humanChoice}`;
    }

}

rockBtn.addEventListener("click", () => {
    const humanChoice = "rock"
    const computerSelection = getComputerChoice();
    checkWinner(humanScore, computerScore)
    playRound(humanChoice, computerSelection)

})

paperBtn.addEventListener("click", () => {
    const humanChoice = "paper"
    const computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection)
    checkWinner(humanScore, computerScore)
})

scissorsBtn.addEventListener("click", () => {
    const humanChoice = "scissors"
    const computerSelection = getComputerChoice();
    checkWinner(humanScore, computerScore)
    playRound(humanChoice, computerSelection)

})

hmnScr.classList.add("scores")

checkWinner(humanScore, computerScore)

function resetGameBtn() {

    resetBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        win.textContent = " "
        hmnScr.textContent = " "
        paraOne.textContent = `Human score: 0 Computer score: 0`
        GameScorePlc.textContent = "Rounds won by human: 0 and by computer: 0"

    })
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    hmnScr.textContent = " "
    paraOne.textContent = `Human score: 0 Computer score: 0`
    // win.textContent = " "
}
let cmpGameScore = 0;
let hmnGameScore = 0;

function checkWinner(hmnScore, cmpScore) {
    if (hmnScore == 5 && cmpScore < 5) {
        win.textContent = "Human won this Round"
        resetGame()
        hmnGameScore++;
        displayWinner()

        GameScorePlc.textContent = `Games won by human: ${hmnGameScore} and by computer: ${cmpGameScore}`
    } else if (cmpScore == 5 && hmnScore < 5) {
        win.textContent = "Computer won this Round"
        resetGame()
        cmpGameScore++;
        displayWinner()
        GameScorePlc.textContent = `Rounds won by human: ${hmnGameScore} and by computer: ${cmpGameScore}`
    }
}

function displayWinner() {
    if (cmpGameScore == 5 && hmnGameScore == 5) {
        win.textContent = "This Game is a Tie"
        resetGame()
        cmpGameScore = 0;
        hmnGameScore = 0;
    } else if(cmpGameScore == 5 && hmnGameScore < 5){
        win.textContent = "Computer won this game"
        resetGame()
        cmpGameScore = 0;
        hmnGameScore = 0;
    } else if(hmnGameScore == 5 && cmpGameScore < 5){
        win.textContent = "Human won this Game"
        resetGame()
        cmpGameScore = 0;
        hmnGameScore = 0;
    }
    GameScorePlc.textContent = "Games won by human: 0 and by computer: 0"

}

display.appendChild(hmnScr)
paraOne.classList.add("paraOne")
scorePlc.appendChild(paraOne)
scorePlc.appendChild(paraOne)
scorePlc.appendChild(GameScorePlc)
scorePlc.appendChild(GameScorePlc)
win.classList.add("win")
display.appendChild(win)
resetGameBtn()