const options = ["ROCK", "PAPER", "SCISSORS"]
const computerScore = 0;
const playerScore = 0;

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}

// getComputerChoice()


function getHumanChoice() {
    const humanChoice = prompt("choose between ROCK, PAPER, SCISSORS")
    console.log(humanChoice.toUpperCase())
    return humanChoice.toUpperCase();
}

// getHumanChoice();

function checkWinner(humanSelection, computerSelection) {
    if(humanSelection == computerSelection){
        return "Tie"
    }else if(
        (humanSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (humanSelection == "PAPER" && computerSelection == "ROCK") ||
        (humanSelection == "SCISSORS" && computerSelection == "PAPER")
    ){
        return "You Win"
    }else{
        return "You Lose"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound() {
    const result = checkWinner(humanSelection, computerSelection)

    if (result == "Tie") {
        return "Tie"
    }else if (result == "You Win") {
        return "you won"
    }else{
        return "you lost"
    }
}

console.log(playRound());

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = checkWinner(humanSelection, computerSelection)
        console.log(result);
}
}

playGame();