//function to get choice from computer
function getComputerChoice() {
    //random number between 0 and 2
    let opt = Math.floor(Math.random() * 3);
    //get string from random number
    let choice = (opt === 0) ? 'rock' : (opt === 1) ? 'paper' : 'scissors';
    return choice;
}

//define a function that plays multiple rounds
function game() {

    //initialize variables needed in outside of round
    let playerScore = 0; 
    let computerScor = 0;
    let winningCondition;

    //define a function that plays one round
    function playRound(playerChoice, computerChoice) {

        //get choice from player and computer
        playerChoice = prompt("Select your weapon: Rock, Paper, or Scissors?");
        playerChoice = playerChoice.toLowerCase();

        //game logic
        if (playerChoice === 'rock' || playerChoice ==='paper' || playerChoice === 'scissors') {
            computerChoice = getComputerChoice();
            if(playerChoice === computerChoice){
                winningCondition = 'Tie';
            } else
            if(playerChoice === 'rock' && computerChoice === 'scissors') {
                winningCondition = 'You Win :)';
            } else
            if(playerChoice === 'paper' && computerChoice === 'scissors') {
                winningCondition = 'You Lose :(';
            } else
            if(playerChoice === 'rock' && computerChoice === 'paper') {
                winningCondition = 'You Lose :(';
            } else
            if(playerChoice === 'scissors' && computerChoice === 'paper') {
                winningCondition = 'You Win :)';
            }
            if(playerChoice === 'scissors' && computerChoice === 'rock') {
                winningCondition = 'You Lose :(';
            } else
            if(playerChoice === 'paper' && computerChoice === 'rock') {
                winningCondition = 'You Win :)';
            }
        //condition for invalid input
        } else {
            console.log("You have not entered a valid answer");
            return playRound();
        }
        
        //console log for dynamic string that fills in choices plus result
        if(winningCondition === 'You Win :)') {
            console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        } else if (winningCondition === 'You Lose :(') {
            console.log(`Sorry! You Lost. ${computerChoice} beats ${playerChoice}`);
        } else if (winningCondition === 'Tie') {
            console.log(`This round was a tie!`);
        }
    }

    //for loop to play five rounds
    for(let i = 0; i < 5; i++){
      playRound()
        
        if (winningCondition === 'You Win :)') {
            playerScore++;
        } else if (winningCondition === 'You Lose :(') {
            computerScor++;
        }
    }

//Message to declare a winner of the full game
let gameWinner = (playerScore > computerScor) ? 'You' : (playerScore == computerScor) ? "Tie" : "Computer";
console.log(`${gameWinner} won! You won ${playerScore} and lost ${computerScor} out of 5 rounds.`);
}

game()

//Ask user to play again?
if(confirm("Would you like to play again?")) {
    game();
}
