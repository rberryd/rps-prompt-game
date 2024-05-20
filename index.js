let choiceElement = document.querySelector('.comp-choice');
let gameMessage = document.querySelector('.game-message');
let playerLabel = document.querySelector('.player-point');
let compLabel = document.querySelector('.computer-point');
let playerScore = 0;
let compScore = 0;

let options = document.querySelectorAll('button');

for(const option of options) {
    option.addEventListener('click', function() {
        let comp = getCompChoice();
        playRound(comp, this.id);
    });
}

function getCompChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let image;

    switch(choices[randomNum]) {
        case "rock":
            image = document.createElement('img');
            image.src = "/img/Microsoft-Fluentui-Emoji-Flat-Rock-Flat.512.png";
            choiceElement.appendChild(image);
            break;
        case "paper":
            image = document.createElement('img');
            image.src = "/img/Microsoft-Fluentui-Emoji-Flat-Roll-Of-Paper-Flat.512.png";
            choiceElement.appendChild(image);
            break;
        case "scissors":
            image = document.createElement('img');
            image.src = "/img/Custom-Icon-Design-Pretty-Office-10-Scissors.512.png";
            choiceElement.appendChild(image);
            break;
    }

    return choices[randomNum];
}

function playRound(computer, player) {
    let combos = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }

    if(combos[player] == computer) {
        playerScore++;
        playerLabel.textContent = playerScore;
        gameMessage.textContent = `Player Won.\nPlayer Score: ${playerScore}\nComputer Score: ${compScore}`;
        setTimeout(reset, 2000);
    } else if(player == computer) {
        gameMessage.textContent = `Draw.\nPlayer Score: ${playerScore}\nComputer Score: ${compScore}`;
        setTimeout(reset, 2000);
    } else {
        compScore++;
        compLabel.textContent = compScore;
        gameMessage.textContent = `Computer Won.\nPlayer Score: ${playerScore}\nComputer Score: ${compScore}`;
        setTimeout(reset, 2000);
    }
}

function reset() {
    choiceElement.textContent = "";
    gameMessage.textContent = "Press a button to play";
}