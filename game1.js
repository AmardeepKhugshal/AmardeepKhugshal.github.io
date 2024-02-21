const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const result = document.querySelector('#result-p')
let playerChoiceResult ;
let computerChoiceResult ;
let resultChoice;


document.querySelectorAll('button').forEach((button)=>{
    button.addEventListener('click',(e)=>{
        playerChoiceResult = e.target.id
        playerChoice.innerHTML = playerChoiceResult;
        computerChoicesRandom()
        resultsProvide ()
    })
})

function computerChoicesRandom (){
    let randomNumber = Math.floor(Math.random()*3)+1; // for random number
    if (randomNumber ===1){
        computerChoiceResult = "rock"
    }
    if(randomNumber === 2){
        computerChoiceResult = "paper"
    }
    if(randomNumber === 3){
        computerChoiceResult = "secissor"
    }
    computerChoice.innerHTML = computerChoiceResult
}

function resultsProvide (){
    if(computerChoiceResult === playerChoiceResult){
        resultChoice = "draw"
    }
    if(computerChoiceResult === "rock" && playerChoiceResult === "paper"){
        resultChoice = "you win🚀"
    }
    if(computerChoiceResult === "rock" && playerChoiceResult === "secissor"){
        resultChoice = "you lose😢"
    }
    if(computerChoiceResult === "paper" && playerChoiceResult === "secissor"){
        resultChoice = "you win🚀"
    }
    if(computerChoiceResult === "paper" && playerChoiceResult === "rock"){
        resultChoice = "you lose😢"
    }
    if(computerChoiceResult === "secissor" && playerChoiceResult === "rock"){
        resultChoice = "you win🚀"
    }
    if(computerChoiceResult === "secissor" && playerChoiceResult === "paper"){
        resultChoice = "you lose😢"
    }
    result.innerHTML = resultChoice   
}
