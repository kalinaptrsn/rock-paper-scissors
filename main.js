const choices = ["rock","paper","scissors"]

function game() {
    for(let i =0; i <= 5; i++){
        playRound();

        if (roundResult === "Player wins round!"){
            ++playerScore;
        } else if (roundResult === "Computer wins round!") {
            ++computerScore;
        }
        }
    }


function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "The result is a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        return "Player wins round!";
        }
    else {
        return "Computer wins round!";
    }
}

function playerChoice (){
    let input = prompt("Choose rock, paper, or scissors");
    while (input == null){  
        input = prompt("Choose rock, paper, or scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        prompt("Choose rock, paper, or scissors");

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

console.log(playRound(playerChoice, computerChoice));


 