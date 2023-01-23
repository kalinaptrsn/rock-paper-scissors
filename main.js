const choices = ['rock','paper','scissors']
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.js-button');
const roundInfo = document.querySelector('.roundInfo');
const roundResults = document.querySelector('.roundResults');
const gameInfo = document.querySelector('.gameInfo');
const gameOver = document.querySelector('.gameOver');

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        getPlayerChoice(e);
        game();
    });
});

function getPlayerChoice (event){
    console.log(event);
    const input = event.target.value;

    playRound(input, computerChoice);
}        

function computerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection){
    const computerSelection = computerChoice();
    roundInfo.textContent = `The computer chose ${computerSelection}.`;

    if (playerSelection === computerSelection) {
        roundResults.textContent = 'The result is a tie!';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
        || (playerSelection === 'paper' && computerSelection === 'rock') 
        || (playerSelection === 'scissors' && computerSelection === 'paper')) 
    {
        playerScore += 1;
        roundResults.textContent = 'You win this round: ' + playerSelection + ' beats ' + 
        computerSelection + '!';
        }
    else {
        computerScore += 1;
        roundResults.textContent = 'You lose this round: ' + computerSelection + ' beats ' + 
        playerSelection + '!';

    }
}

function game() {
    gameInfo.textContent = `Player - ${playerScore} Computer - ${computerScore}`;
    if (playerScore === 5)
    gameOver.textContent = 'You won the game!';
    else if (computerScore === 5)
    gameOver.textContent = 'The computer won the game!';
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



 