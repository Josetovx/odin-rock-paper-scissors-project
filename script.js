console.log("Hello Odin World! Let's play!")

/* Create a function to get the computer choice.
Computer choice will have the same probability to 
get whatever of the three options */
function getComputerChoice() {
    let computerChoice=Math.random().toPrecision(2);
    let result;
    if (computerChoice>=0 && computerChoice<0.34) {
        result="rock";
        console.log("rock");
    } else if (computerChoice>=0.34 && computerChoice<0.67) {
        result="paper";
        console.log("paper");
    } else {
        result="scissors";
        console.log("scissors");
    }
    return result;
}

/* Then, create a function to get the human choice.
A prompt will appear in the page, then the user should 
write its answer */
function getHumanChoice() {
    let humanChoice = prompt("Please, enter your choice: select between \"rock\", \"paper\" or \"scissors\".");
    humanChoice=humanChoice.toLowerCase();
    if (humanChoice==="rock") {
        console.log("rock");
    } else if (humanChoice==="paper") {
        console.log("paper");
    } else if (humanChoice==="scissors") {
        console.log("scissors");
    } else {
        console.log("Invalid intput.")
    }
    return humanChoice
}

/* Create two new variables for the score,
in order to keep track of the players score */
let humanScore=0;
let computerScore=0;

/* Create a function to play a single round, with
all possible results, and increment the round winner's score */
function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice) {
        console.log("Draw! Try again for a new game.");
    } else if (humanChoice==="rock" && computerChoice==="paper") {
        console.log("Computer wins :-o");
        computerScore++;
    } else if (humanChoice==="rock" && computerChoice==="scissors"){
        console.log("Congratulations! You win :D");
        humanScore++;
    } else if (humanChoice==="paper" && computerChoice==="rock") {
        console.log("Congratulations! You win :D");
        humanScore++;
    } else if (humanChoice==="paper" && computerChoice==="scissors") {
        console.log("Computer wins :-o");
        computerScore++;
    } else if (humanChoice==="scissors" && computerChoice==="rock") {
        console.log("Computer wins :-o");
        computerScore++;
    } else if (humanChoice==="scissors" && computerChoice==="paper") {
        console.log("Congratulations! You win :D");
        humanScore++;
    }  else {
        console.log("Please, enter a valid value.");
        alert("Please, enter a valid value.");
        humanChoice=getHumanChoice();
        computerChoice=getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/* Create a function to play 5 rounds and finally
declares the winner of the game. */
function playGame() {
    for (let i=0; i<4; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore>computerScore) {
        console.log("You have won the full game.")
        alert("You have won the full game.")
    } else if (computerScore>humanScore) {
        console.log("Computer has won the full game.")
        alert("Computer has won the full game.")
    } else {
        console.log("Stalemate!")
        alert("Stalemate!")
    }
}

playGame();