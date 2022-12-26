const choices = ["rock","paper","scissors"]
let playerScore = 0;
let computerScore = 0;

function playerChoice (){
    let input = prompt("Choose rock, paper, or scissors");
    while (input == null){  
        input = prompt("Choose rock, paper, or scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt("Please choose rock, paper, or scissors");
             while (input == null) {
                 input = prompt("Choose rock, paper, or scissors");
             }
             
         input = input.toLowerCase();
         check = validateInput(input);
    }
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random()*3)]
}

function validateInput(choice){
    return choices.includes(choice);
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        console.log("The result is a tie!");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        ++playerScore;
        console.log("Player wins round!");
        }
    else {
        ++computerScore;
        console.log("Computer wins round!");

    }
}
function game() {
    for(let i = 0; i <= 5; i++){
        playerChoice();
        computerChoice();
        if (i == 5) {
            if (playerScore > computerScore) {
            consolelog("Yay! You beat the computer!");
            } else if (playerScore === computerScore) {
            console.log("It's a tie, no one won!");
            } else {
            console.log("Haha, the computer beat you!");
            }
            console.log("Player Score = " + playerScore);
            console.log("Computer Score = " + computerScore);
       
        } else {
        playRound(playerChoice, computerChoice);
        }
    }
}
 game();



 