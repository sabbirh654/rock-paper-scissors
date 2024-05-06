"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choice = Math.floor((Math.random() * 3));

    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }

    return "scissors";
}

function playRound(humanChoice, computerChoice) {

    const roundWinner = document.querySelector("#roundWinner");
    const humanScoreText = document.querySelector("#humanScore");
    const computerScoreText = document.querySelector("#computerScore");

    if (humanChoice == computerChoice) {
        roundWinner.textContent = "round is tie!";
        return;
    }

    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {

        roundWinner.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else {
        roundWinner.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    humanScoreText.textContent = `Your score is : ${humanScore}`;
    computerScoreText.textContent = `Computer score is : ${computerScore}`;
}


const btnClickHandler = function (e) {

    const finalWinner = document.querySelector("#finalWinner");

    const humanChoice = e.target.id;

    const humanChoiceText = document.querySelector("#humanChoice");
    humanChoiceText.textContent = `you choose : ${humanChoice}`;

    const computerChoice = getComputerChoice();
    const computerChoiceText = document.querySelector("#computerChoice");
    computerChoiceText.textContent = `Computer choose : ${computerChoice}`;

    if(humanScore == 0 && computerScore == 0) {
        finalWinner.textContent = "";
    }

    playRound(humanChoice, computerChoice);

    if (humanScore == 5 || computerScore == 5) {

        if (humanScore == 5) {
            finalWinner.textContent = "Congrats! You Win.";
        }
        else if (computerScore == 5) {
            finalWinner.textContent = "Better Luck next time.";
        }

        humanScore = 0;
        computerScore = 0;
    }
}

const btns = document.querySelectorAll(".buttons");

btns.forEach(btn => {
    btn.addEventListener('click', btnClickHandler)
});