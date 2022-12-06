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
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (event) {
    if (event.target.className === 'play-again') {
        window.location.reload();
    }
});

function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    if (guess === winningNum) {
        const message = `${winningNum} is correct! YOU WIN`;
        gameOver(true, message);
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            const message = `Game Over, you lost, ${winningNum} was the correct number`;
            gameOver(false, message)
        } else {
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, you have ${guessesLeft} left`, 'red');
            guessInput.value = '';
        }
    }
});

function gameOver(won, msg) {
    let color = won ? 'green' : 'red';
    guessInput.style.borderColor = color;
    message.style.color = color;
    guessInput.disabled = true;
    setMessage(msg, color);
    guessBtn.value = 'Play again?';
    guessBtn.className += 'play-again'
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}