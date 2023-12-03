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

/**
 * Plays a round of Jan-Ken-Pon.
 * If tied, the function will call itself until a winner is determined.
 * @param {Hand} playerSelection - The player's hand
 * @param {Hand} computerSelection - The computer's hand
 * @returns {int} - 0 if player wins, 1 if computer wins
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playRound(playerSelection, computerSelection);
    } else if (playerSelection === Hand.ROCK) {
        if (computerSelection === Hand.PAPER) {
            console.log("You lose! " + PAPER_BEATS_ROCK);
            return 1;
        } else {
            console.log("You win! " + ROCK_BEATS_SCISSORS);
            return 0;
        }
    } else if (playerSelection === Hand.PAPER) {
        if (computerSelection === Hand.ROCK) {
            console.log("You win! " + PAPER_BEATS_ROCK);
            return 0;
        } else {
            console.log("You lose! " + SCISSORS_BEATS_PAPER);
            return 1;
        }
    } else if (playerSelection === Hand.SCISSORS) {
        if (computerSelection === Hand.ROCK) {
            console.log("You lose! " + ROCK_BEATS_SCISSORS);
            return 1;
        } else {
            console.log("You win! " + SCISSORS_BEATS_PAPER);
            return 0;
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