let playerScore = 0;
let compScore = 0;

function getCompChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function getPlayerChoice() {
    let answer = prompt("Which one would you like to play(Rock, Paper, Scissors)?");

    switch(answer.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Improper Answer. Please Try Again.")
            return getPlayerChoice();
    }
}

function playRound(computer, player) {
    let combos = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }

    if(combos[player] == computer) {
        playerScore++;
        alert(`Player Won.\nPlayer Score: ${playerScore}\nComputer Score: ${compScore}`);
    } else if(player == computer) {
        alert(`Draw.\nPlayer Score: ${playerScore}\nComputer Score: ${compScore}`);
    } else {
        compScore++;
        alert(`Computer Won.\nPlayer Score: ${playerScore}\nComputer Score: ${compScore}`);
    }
}

function playGame(times = 5) {
    for(let i = 0; i <= times; i++) {
        let compChoice = getCompChoice();
        let playerChoice = getPlayerChoice();
        playRound(compChoice, playerChoice);
    }

    while(true) {
        let answer = prompt("Would you like to play again?");
    
        if(answer.toLowerCase() != "yes") {
            return alert("Bye bye");
        }
    
        let rounds = prompt("How many rounds would you like to play?");
    
        if(parseInt(rounds) == NaN) {
            alert("Invalid Answer");
        } else {
            return playGame(parseInt(rounds));
        }
    }
}

playGame();

console.log(getCompChoice());