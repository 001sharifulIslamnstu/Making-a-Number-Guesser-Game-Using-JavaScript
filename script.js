// Set the range
let lower = 1;
let upper = 10;

// Select a random number in the range
let correctAnswer = Math.floor(Math.random() * (upper - lower + 1)) + lower;

let chancesLeft = 3;
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('result');
const chancesDisplay = document.getElementById('chances');
const restartButton = document.getElementById('restartButton');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (userGuess === correctAnswer) {
        resultMessage.textContent = 'You win!';
        resultMessage.style.color = 'green';
        guessInput.disabled = true;
        guessButton.disabled = true;
        restartButton.disabled = false;
    } else {
        chancesLeft--;
        if (userGuess < correctAnswer) {
            resultMessage.textContent = 'Correct answer is greater!';
        } else {
            resultMessage.textContent = 'Correct answer is smaller!';
        }
        
        if (chancesLeft === 0) {
            resultMessage.textContent = 'You lose!';
            resultMessage.style.color = 'red';
            guessInput.disabled = true;
            guessButton.disabled = true;
            restartButton.disabled = false;
        }
    }

    chancesDisplay.textContent = chancesLeft;
});

restartButton.addEventListener('click', () => {
    // Reset the game
    correctAnswer = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    chancesLeft = 3;
    chancesDisplay.textContent = chancesLeft;
    guessInput.value = '';
    resultMessage.textContent = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.disabled = true;
});
