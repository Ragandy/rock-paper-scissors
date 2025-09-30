console.log("Hello world");

//Getting the Computer's choice 
function getComputerChoice(){
    let num;
    num = Math.random() *100;
   
    if (num <=33){
        return "rock";
    } else if (num > 33 && num <= 66){
        return "paper"

    } else{
        return "scissors"
    }
}


//Getting the Human's choice
function getHumanChoice(){
    let choice = prompt("Pick Rock, Paper, or Scissors!");
    return choice;
}


//Declaring score variables


//Playing a full game!
function playGame(){
    let humanScore = 0, computerScore = 0;

//Playing a round!
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice){
            console.log(`No winners! You both picked ${humanChoice}!`)
        } else if (humanChoice == "rock" && computerChoice != "paper"){
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        } else if (humanChoice == "paper" && computerChoice != "scissors"){
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        } else if (humanChoice == "scissors" && computerChoice != "rock"){
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        } else {
            computerScore++
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        }
    }
//Fullgame = 5 rounds
    for (let i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore);
    console.log(computerScore);
}
console.log(playGame());

