const Hand = Object.freeze({
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2
});

const PAPER_BEATS_ROCK = "Paper beats Rock";
const ROCK_BEATS_SCISSORS = "Rock beats Scissors";
const SCISSORS_BEATS_PAPER = "Scissors beats Paper";
const NUM_OF_ROUNDS = 5;

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
 * @returns {int} - 0 if player wins, 1 if computer wins, and 2 if tied
 */
function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('.results');
    const result = document.createElement('p');
    if (playerSelection === computerSelection) {
        result.innerText = "Tie! Play again.";
        results.appendChild(result);
        return 2;
    } else if (playerSelection === Hand.ROCK) {
        if (computerSelection === Hand.PAPER) {
            result.innerText = "You lose! " + PAPER_BEATS_ROCK;
            results.appendChild(result);
            return 1;
        } else {
            result.innerText = "You win! " + ROCK_BEATS_SCISSORS;
            results.appendChild(result);
            return 0;
        }
    } else if (playerSelection === Hand.PAPER) {
        if (computerSelection === Hand.ROCK) {
            result.innerText = "You win! " + PAPER_BEATS_ROCK;
            results.appendChild(result);
            return 0;
        } else {
            result.innerText = "You lose! " + SCISSORS_BEATS_PAPER;
            results.appendChild(result);
            return 1;
        }
    } else if (playerSelection === Hand.SCISSORS) {
        if (computerSelection === Hand.ROCK) {
            result.innerText = "You lose! " + ROCK_BEATS_SCISSORS;
            results.appendChild(result);
            return 1;
        } else {
            result.innerText = "You win! " + SCISSORS_BEATS_PAPER;
            results.appendChild(result);
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < NUM_OF_ROUNDS; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerSelection();
        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            playerScore++;
        } else if (result === 1) {
            computerScore++;
        } else {
            i--;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win! " + playerScore + " - " + computerScore);
    } else {
        console.log("You lose! " + playerScore + " - " + computerScore);
    }
}

const hand = document.querySelector(".hand");
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

hand.onclick = (event) => {
    let target = event.target;
    let result = 0;

    const results = document.querySelector('.results');
    const player = document.querySelector('.score .player');
    const computer = document.querySelector('.score .computer');
    const ties = document.querySelector('.score .ties');
    if (playerScore == 5 || computerScore == 5) {
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        player.innerText = playerScore;
        computer.innerText = computerScore;
        ties.innerText = tieScore;
    }
    switch (target.id) {
        case 'rock':
            result += playRound(Hand.ROCK, getComputerChoice());
            break;

        case 'paper':
            result += playRound(Hand.PAPER, getComputerChoice());
            break;

        case 'scissors':
            result += playRound(Hand.SCISSORS, getComputerChoice());
            break;
    }

    if (result === 0) {
        playerScore++;
        player.innerText = playerScore;
    } else if (result === 1) {
        computerScore++;
        computer.innerText = computerScore;
    } else {
        tieScore++;
        ties.innerText = tieScore;
    }

    if (playerScore == 5) {
        alert("You win! " + playerScore + " - " + computerScore);
    } else if (computerScore == 5) {
        alert("You lose! " + playerScore + " - " + computerScore);
    }
};
