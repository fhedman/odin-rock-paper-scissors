let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);

    if (choice < 33){
        return "rock";
    }
    else if (choice > 33 && choice < 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let buttons = document.querySelector('#score');

buttons.addEventListener('click', function(event) {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('Rock was clicked');
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            console.log('Paper was clicked');
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            console.log('Scissors was clicked');
            playRound('scissors', getComputerChoice());
            break;
        }
});

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
        colorButton('tie', computerChoice, playerChoice);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        colorButton('player', computerChoice, playerChoice);
        playerScore++;
        setScore('player', playerScore + '');
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        colorButton('computer', computerChoice, playerChoice);
        computerScore++;
        setScore('computer', computerScore + '');
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock");
        colorButton('player', computerChoice, playerChoice);
        playerScore++;
        setScore('player', playerScore + '');
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        colorButton('computer', computerChoice, playerChoice);
        computerScore++;
        setScore('computer', computerScore + '');
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        colorButton('player', computerChoice, playerChoice);
        playerScore++;
        setScore('player', playerScore + '');
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors");
        colorButton('computer', computerChoice, playerChoice);
        computerScore++;
        setScore('computer', computerScore + '');
    }

    setTimeout(resetButtons, 300);

    if (playerScore === 5 || computerScore === 5) {
        let finalMessage = "";
        if (playerScore > computerScore) {
            finalMessage = "FINAL RESULT: You win " + playerScore + "-" + computerScore + " with " + playerChoice + "!";
        } else if (computerScore > playerScore) {
            finalMessage = "FINAL RESULT: Computer wins " + computerScore + "-" + playerScore + " with " + computerChoice + "!";
        } else {
            finalMessage = "FINAL RESULT: It's a tie!";
        }
        alert(finalMessage);
        resetGame();
    }
}


function colorButton(winner, loser, choice) {
    let playerButton = document.querySelector('#' + choice);
    let computerButton = document.querySelector('#c' + loser);

    if (winner === 'player') {
        playerButton.style.background='#2cb02c';
        computerButton.style.background= '#ff4b42';
    } else if (winner === 'computer'){
        playerButton.style.background='#ff4b42';
        computerButton.style.background= '#2cb02c';
    } else {
        playerButton.style.background='#ff4b42';
        computerButton.style.background= '#ff4b42';
    }
}

function resetButtons () {
    document.querySelectorAll('.button').forEach(button => {
        button.style.background = ''; 
    });
}

function setScore (winner, score){
    document.querySelector('#' + winner + 'Score').textContent = score;
}

function resetScore () {
    document.querySelector('#playerScore').textContent = 0;
    document.querySelector('#computerScore').textContent = 0;
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    resetScore();
    resetButtons();
}