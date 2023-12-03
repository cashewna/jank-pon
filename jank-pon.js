const Hand = Object.freeze({
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2
});

const PAPER_BEATS_ROCK = "Paper beats Rock";
const ROCK_BEATS_SCISSORS = "Rock beats Scissors";
const SCISSORS_BEATS_PAPER = "Scissors beats Paper";

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return Hand.ROCK;
        case 1:
            return Hand.PAPER;
        case 2:
            return Hand.SCISSORS;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playRound(playerSelection, computerSelection);
    } else if (playerSelection === Hand.ROCK) {
        if (computerSelection === Hand.PAPER) {
            return "You lose! " + PAPER_BEATS_ROCK;
        } else {
            return "You win! " + ROCK_BEATS_SCISSORS;
        }
    } else if (playerSelection === Hand.PAPER) {
        if (computerSelection === Hand.ROCK) {
            return "You win! " + PAPER_BEATS_ROCK;
        } else {
            return "You lose! " + SCISSORS_BEATS_PAPER;
        }
    } else if (playerSelection === Hand.SCISSORS) {
        if (computerSelection === Hand.ROCK) {
            return "You lose! " + ROCK_BEATS_SCISSORS;
        } else {
            return "You win! " + SCISSORS_BEATS_PAPER;
        }
    }
}

function getPlayerSelection() {
    let answer = prompt(
        "Jan-Ken-Pon! Choose your hand: Rock, Paper, or Scissors"
    );
    answer = answer.toUpperCase();
    switch (answer) {
        case "ROCK":
            return Hand.ROCK;
        case "PAPER":
            return Hand.PAPER;
        case "SCISSORS":
            return Hand.SCISSORS;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();
console.log(playRound(playerSelection, computerSelection));