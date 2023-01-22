const choices = ['rock','paper','scissors']
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.js-button')

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        getPlayerChoice(e);
    });
});

function getPlayerChoice (event){
    console.log(event);
    const input = event.target.value;
    // let input = prompt('Choose rock, paper, or scissors');
    //while (input == null){  
    //    input = prompt('Choose rock, paper, or scissors');
    //}
    //input = input.toLowerCase();
    //let check = validateInput(input);
    // while (check == false){
    //     input = prompt('Please choose rock, paper, or scissors');
    // while (input == null) {
    //     input = prompt('Choose rock, paper, or scissors');
    // }
    
    //     input = input.toLowerCase();
    //     check = validateInput(input);
    //}
    playRound(input, computerChoice);
}        

function computerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function playRound(playerSelection){
    const computerSelection = computerChoice();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        console.log('The result is a tie!');
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
        || (playerSelection === 'paper' && computerSelection === 'rock') 
        || (playerSelection === 'scissors' && computerSelection === 'paper')) 
    {
        playerScore += 1;
        console.log('Player wins round!');
        }
    else {
        computerScore += 1;
        console.log('Computer wins round!');

    }
}

//function init() {
//    for(let i = 0; i <= 5; i++){
//        if (i == 5) {
//          if (playerScore > computerScore) {
//          console.log('Yay! You beat the computer!');
//            } else if (playerScore === computerScore) {
//            console.log("It's a tie, no one won!");
//           } else {
//            console.log('Haha, the computer beat you!');
//            }
//            console.log('Player Score = ' + playerScore);
//            console.log('Computer Score = ' + computerScore);
       
//            } else {
//            playRound(getPlayerChoice, computerChoice);
//            }
//    }
//}
//init();



 