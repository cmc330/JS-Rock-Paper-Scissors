let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.results > p');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');

// function for the computer turn to choose at random.
function computerPlay() { 
    let choices = ['rock', 'paper', 'scissors']   
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}
// function for when player wins
function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallPlayer = "PLAYER".fontsize(3).sub();
    const smallComp = "COMP".fontsize(3).sub();
    result_p.innerHTML = `YOU WIN!! ${playerSelection}${smallPlayer} beats ${computerSelection}${smallComp} .`
}
// function for when player loses
function lose(playerSelection, computerSelection) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallPlayer = "PLAYER".fontsize(3).sub();
    const smallComp = "COMP".fontsize(3).sub();
    result_p.innerHTML = `YOU LOSE... ${computerSelection}${smallComp} beats ${playerSelection}${smallPlayer} .`
}
// function for a draw
function draw(playerSelection) {
    result_p.innerHTML = `DRAW... you and the computer selected ${playerSelection}.`
}

// runs a round of the game
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    return (playerSelection === computerSelection) ? draw(playerSelection) 
        : (playerSelection === "rock" && computerSelection === "paper") ? lose(playerSelection, computerSelection)
        : (playerSelection === "paper" && computerSelection === "scissors") ? lose(playerSelection, computerSelection)
        : (playerSelection === "scissors" && computerSelection === "rock") ? lose(playerSelection, computerSelection)
        : win(playerSelection, computerSelection);
}

// Adds event listeners and runs the game function when clicked
function game(){
    rock_btn.addEventListener('click', () => 
        playRound("rock"));

    paper_btn.addEventListener('click', () => 
        playRound("paper"));

    scissors_btn.addEventListener('click', () => 
        playRound("scissors"));
}

game();
