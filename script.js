console.log("Hello Odin World!")

/* Create a function to get the computer choice.
Computer choice will have the same probability to 
get whatever of the three options */
function getComputerChoice() {
    let result=Math.random().toPrecision(2);
    if (result>=0 && result<0.34) {
        console.log("rock")
    } else if (result>=0.34 && result<0.67) {
        console.log("paper")
    } else {
        console.log("scissors")
    }
    return result
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
let humanScrore=0
let computerScore=0
