"use strict";

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

function getHumanChoice() {
    let choice = prompt("Hey Enter your choice : ");
    if (choice == null || (choice != "rock" && choice != "paper" && choice != "scissors")) {
        getHumanChoice();
    }

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("round is tie!");
        return;
    }

    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {

        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return true;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return false;
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const isHumanWinner = playRound(humanChoice, computerChoice);

        if (isHumanWinner == undefined) {
            continue;
        }

        if (isHumanWinner) {
            humanScore++;
        }
        else {
            computerScore++;
        }
    }

    if (humanScore == computerScore) {
        console.log("Match tied!");
    }
    else if (humanScore > computerScore) {
        console.log("You winner!")
    }
    else {
        console.log("Computer Winner!");
    }
}

playGame();