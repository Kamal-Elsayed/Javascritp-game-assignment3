function game(Rock, Paper, Scissors) {
    let UserPlay = 0,
    ComputerPlay = 0,
    moves = 0
}
function SingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
    console.log(Draw);

    else if (playerSelection == Paper)
        if (computerSelection == Scissors){
            console.log("Computer Win");
        }
        
       
    else if (playerSelection == Paper)
        if (computerSelection == Rock) {
            console.log("You Win");
        }

    else if (playerSelection == Scissors)
        if (computerSelection == Rock){
            console.log("Computer Win");
        }
    
    else if (playerSelection == Scissors)
        if (computerSelection == Paper){
            console.log("You Win");
        }

    else if (playerSelection == Rock)
        if (computerSelection == Paper){
            console.log("Computer Win");
        }
    
    else if (playerSelection == Rock)
        if (computerSelection == Scissors){
            console.log("You Win");
        }

    

}
return game
