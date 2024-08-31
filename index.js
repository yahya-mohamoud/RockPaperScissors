
const rockBtn = document.querySelector(".rockBtn")
const paperBtn = document.querySelector(".paperBtn")
const scissorsBtn = document.querySelector(".scissorsBtn")
const display = document.querySelector(".display")
const scorePlc = document.querySelector(".score")
const resetBtn = document.querySelector("button")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor(Math.random() * choices.length + 1)

   let computer = (computerChoice == 1)?computerChoice = "rock": computerChoice == 2? computerChoice = "paper": computerChoice = "scissors"
    

   return computerChoice;
 
}

// getComputerChoice()


const hmnScr = document.createElement("h3")
const paraOne = document.createElement("h3")
paraOne.textContent = `Human score: 0  Computer score: 0`;
const win = document.createElement("h2")





function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        hmnScr.textContent = "It's a tie game"
    } else if (  
        humanChoice === "rock" && computerChoice === "scissors"||
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


paraOne.classList.add("paraOne")
scorePlc.appendChild(paraOne)
scorePlc.appendChild(paraOne)




rockBtn.addEventListener("click", () =>{
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
display.appendChild(hmnScr)
display.appendChild(hmnScr)
display.appendChild(hmnScr)



checkWinner(humanScore, computerScore)



function resetGame () {

    resetBtn.addEventListener("click", () =>{
        humanScore = 0;
        computerScore = 0;
        win.textContent = " "
        hmnScr.textContent = " "
        paraOne.textContent = `Human score: 0 Computer score: 0`
    })

}

function checkWinner (hmnScore, cmpScore) {
    if ( hmnScore == 5 && cmpScore < 5) {

        win.textContent = "Human won this GAME"
        resetGame()
    }else if (cmpScore == 5 && hmnScore < 5){
        win.textContent = "Computer won this GAME"
        resetGame()

    }
}

display.appendChild(hmnScr)
scorePlc.appendChild(paraOne)
scorePlc.appendChild(paraOne)
win.classList.add("win")
display.appendChild(win)
resetGame()