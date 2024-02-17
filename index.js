console.log("hey")

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const pick = options[Math.floor(Math.random() * options.length)]
    return pick;
}

getComputerChoice();