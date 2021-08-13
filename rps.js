
game()

// function for the computer turn to choose at random.
function computerPlay() {    
    let comp = Math.floor(Math.random() * 3) + 1;

    return comp === 1 ? "ROCK"
        : comp === 2 ? "PAPER" : "SCISSORS";

}
//function to play a round of rock, paper, scissors and display a win, loss, or draw.
function playRound(playerSelection, computerSelection) {
    let win = `You Win!!! ${playerSelection} beats ${computerSelection}.`;
    let lose = `You Lose... ${computerSelection} beats ${playerSelection}.`;
    let draw = `Draw! You and the computer chose ${computerSelection}.`;

   return (playerSelection === computerSelection) ? draw 
        : (playerSelection === "ROCK" && computerSelection === "PAPER") ? lose
        : (playerSelection === "PAPER" && computerSelection === "SCISSORS") ? lose
        : (playerSelection === "SCISSORS" && computerSelection === "ROCK") ? lose
        : win;
}

//function to play a 5 round game, keeping score and reporting the winner and loser at the end.
function game() {
    let rounds = 1;
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    while (rounds < 6) {
        let playerSelection = PlayerMove();
        let computerSelection = computerPlay();
}
    console.log(`round: ${rounds}\t\tPlayer Score: ${playerScore}\t\tComputer Score: ${computerScore}`);
        let outcome = playRound(playerSelection, computerSelection); 
            console.log(outcome);
                outcome.includes("Win") ? playerScore++ 
                : outcome.includes("Lose") ? computerScore++ 
                : draws++;
        rounds++;
    
    (playerScore > computerScore) ? console.log(`FINAL SCORE:\t\tPlayer Score: ${playerScore}\t\tComputer Score: ${computerScore}\nCongratulation! You win!`) 
    : (playerScore < computerScore) ? console.log(`FINAL SCORE:\t\tPlayer Score: ${playerScore}\t\tComputer Score: ${computerScore}\nSorry... You Lose!`) 
    : console.log(`FINAL SCORE:\tPlayer Score: ${playerScore}\t\tComputer Score: ${computerScore}\nIt's a Draw...`); 
}
//function that runs the player move when the button is selected
function PlayerMove(e) {
    (e.target.id === 'btnR') ? "ROCK"
        : (e.target.id === 'btnP') ? "PAPER"
        : (e.target.id ==='btnS') ? "SCISSORS"
        : null;
}
// add event listeners to buttons to run playerMove on click.
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', PlayerMove));