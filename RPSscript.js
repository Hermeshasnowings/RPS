let userScore = 0;
let computerScore = 0;


//get computers selection
function computerPlay() 
{ return (["paper","scissors","rock"])[Math.random() * 3 | 0];}


// single round
function playRound(playerSelection, computerSelection) {
    
//tie state

    if (playerSelection.toLowerCase() === "rock" && computerSelection ==="rock" || 
    computerSelection === "scissors" && playerSelection.toLowerCase() === "scissors"  || 
    computerSelection === "paper" && playerSelection.toLowerCase() === "paper"){
        console.log("It's a tie!");
        return ("Tie");
        }

   //win or lose state

    else if (playerSelection.toLowerCase() === "rock" && computerSelection ==="paper"){
        computerScore++;
        console.log("Paper beats rock! You lose!");
    return ("Loss");
}

        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        userScore++;
        console.log("Rock beats scissors, you win!");
        return ("Win")
    
}
    
       
        else if (playerSelection.toLowerCase() === "paper" && computerSelection ==="scissors"){
            computerScore++;
            console.log("Scissors beats paper! You lose!");
        return ("Loss")}

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
                computerScore++;
                console.log("Paper beats Rock, you lose!");
            return ("Loss")}
    
            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
                userScore++;
                console.log("Scissors beats paper, you win!")
            return ("Win");}

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
                computerScore++;
                console.log("Rock beats scissors, you lose!");
            return ("Loss")}

            }
    
// 5 rounds

function game() {
        playRound();
        playRound();
        playRound();
        playRound();
        playRound();
}


for(var i=0; i<5;i++){
    let playerSelection = prompt("pick a move!");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));
    console.log("computer's score = " + computerScore);
    console.log("User's score = " + userScore);
}

if (userScore > computerScore) {
console.log("User is the winner!");}

else if (computerScore > userScore){
console.log("Computer is the winner");}

else if (console.log("nobody wins"));




