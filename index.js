const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const pick = options[Math.floor(Math.random() * options.length)]
    return pick;
}


function getWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = getWinner(playerSelection, computerSelection);
        if(result == "tie"){
            return "It's a tie!"
        }
        else if(result == "player"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if(result == "computer"){
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper, or Scissors?")
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}



function playGame(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome to my game")
    for (i =0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(" ")
        if(getWinner(playerSelection, computerSelection) == "player"){
            scorePlayer++;
        }
        else if(getWinner(playerSelection, computerSelection) == "computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("The player is the victor");
    }
    else if(scorePlayer < scoreComputer){
        console.log("The computer is reigning champion now");
    }else {
        console.log("");
    }
}
 
playGame()



