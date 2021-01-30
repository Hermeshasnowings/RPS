
let playerScore = 0;
let computerScore = 0;



//get computers selection
function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0];}

 //console.log(computerSelection);





// single round

function playRound(playerSelection, computerSelection) {
computerPlay();
    
//tie state

    if (playerSelection === "rock" && computerSelection ==="rock" || 
    computerSelection === "scissors" && playerSelection === "scissors"  || 
    computerSelection === "paper" && playerSelection === "paper"){
        return ("It's a tie!");}

   //win or lose state

    else if (playerSelection === "rock" && computerSelection ==="paper"){
        return ("Paper beats rock! You lose!");}

        else if (playerSelection === "rock" && computerSelection === "scissors"){
        return ("Rock beats scissors, you win!");}
    
       
        else if (playerSelection === "paper" && computerSelection ==="scissors"){
            return ("Scissors beats paper! You lose!");}

            else if (playerSelection === "paper" && computerSelection === "rock"){
                return ("Paper beats Rock, you lose!");}
    
            else if (playerSelection === "scissors" && computerSelection === "paper"){
            return ("Scissors beats paper, you win!");}

            else if (playerSelection === "scissors" && computerSelection === "rock"){
                return ("Rock beats scissors, you lose!");}


    let winstate = playRound("Scissors beats paper, you win!");

        //keeping score
if (playRound == winstate) {
    playerScore ++;
}          
else if (playRound == losestate)
{computerScore ++;}
    }

    

    let playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = computerPlay();



console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);

// 5 rounds


function game() {
    
playRound();
console.log(playerScore);
playRound();
playRound();
playRound();
playRound();}

game();



