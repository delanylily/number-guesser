/*
Game Rules:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- notifiy player of the correct answer if they lost
- let player choose to play again
*/

// Game values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// assign ui min and max

minNum.textContent = min;
maxNum.textContent = max;

// listen for guess

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    // validate input- check that it's not blank and that it isn't less or more than min and max
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // check if won
    if (guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct! YOU WIN`, 'green')
    } else {
        console.log('lose')
    }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}