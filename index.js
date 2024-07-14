playGame();

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

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    return choice.toLowerCase();
}

function playGame(){

    let computerScore = 0;
    let humanScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i)
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log("SCORE: Human: " + humanScore + " Computer : " + computerScore);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats rock");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats rock");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats paper");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
    }

    if (computerScore === humanScore) {
        console.log("FINAL RESULT: Tie!");
    } else if (humanScore > computerScore) {
        console.log("FINAL RESULT: Human wins!");
    } else {
        console.log("FINAL RESULT: Computer wins!");
    }
}