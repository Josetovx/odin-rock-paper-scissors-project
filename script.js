console.log("Hello Odin World!")

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