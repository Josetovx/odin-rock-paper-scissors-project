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