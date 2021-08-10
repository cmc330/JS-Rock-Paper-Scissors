function computerPlay() {
    let comp = Math.floor(Math.random() * 3) + 1;

    return comp === 1 ? "ROCK"
        : comp === 2 ? "PAPER" : "SCISSORS";

}

function playRound(playerSelection, computerSelection) {
    let upperPlayer = playerSelection.toUpperCase();
    let win = `You Win!!! ${upperPlayer} beats ${computerSelection}.`;
    let lose = `You Lose... ${computerSelection} beats ${upperPlayer}.`;
    let draw = `Draw! You and the computer chose ${computerSelection}.`;

    if (upperPlayer === computerSelection){
        return draw;
    } else if (upperPlayer === "ROCK" && computerSelection === "PAPER") {
        return lose;
    } else if (upperPlayer === "PAPER" && computerSelection === "SCISSORS") {
        return lose;
    } else if (upperPlayer === "SCISSORS" && computerSelection === "ROCK") {
        return lose;
    } else {
        return win;
    }

}
