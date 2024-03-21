// variables
const computerChoice = document.querySelector('#computer-choice');
const userChoice = document.querySelector('#user-choice');
const result = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');
let uChoice, cChoice;

// End variables

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // user choice
    uChoice = e.target.id;
    userChoice.innerText = uChoice;
    // computer choice
    cChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)].id;
    computerChoice.innerText = cChoice;
    // result
    displayResult();
}))

// result function 
const displayResult = () => {
    // equal
    if (uChoice == cChoice) {
        result.innerText = 'you are equal';
    }
    // user win 
    else if (cChoice == 'rock' && uChoice == 'paper' || cChoice == 'paper' && uChoice == 'scissors' || cChoice == 'scissors' && uChoice == 'rock') {
        result.innerText = 'you win!';
    }
    // user lost
    else if (cChoice == 'rock' && uChoice == 'scissors' || cChoice == 'paper' && uChoice == 'rock' || cChoice == 'scissors' && uChoice == 'paper') {
        result.innerText = 'you lost!';
    }
}
