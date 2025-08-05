let RandomNumber = parseInt(Math.random() * 100 + 1);

const guessInput = document.querySelector('#guessFeild');
const submit = document.querySelector('#submit');
const prevGuess = document.querySelector('.guesses');
const remainingChance = document.querySelector('.lastResult');
const message = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultContainer');
const p = document.createElement('p');

let prevGuessArr = [];
let Startplay = true;
let noOfGuess = 1;

if (Startplay) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuess = parseInt(guessInput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter number greater than 1');
  } else if (guess > 100) {
    alert('Please enter number less than 100');
  } else {
    prevGuessArr.push(guess);
    if (noOfGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${RandomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === RandomNumber) {
    displayMessage('You guessed it right!!');
    endGame();
  } else if (guess < RandomNumber) {
    displayMessage('Number is too low');
  } else {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  guessInput.value = '';
  prevGuess.innerHTML += `${guess}, `;
  noOfGuess++;
  remainingChance.innerHTML = `${11 - noOfGuess}`;
}

function displayMessage(msg) {
  message.innerHTML = `<h3>${msg}</h3>`;
}

function endGame() {
  guessInput.value = '';
  guessInput.setAttribute('disabled', true);
  p.classList.add('button');
  p.innerHTML = `<h3 class="newGame">Start New Game</h3>`;
  startOver.appendChild(p);
  Startplay = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('.newGame');
  newGameButton.addEventListener('click', function () {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuessArr = [];
    noOfGuess = 1;
    prevGuess.innerHTML = '';
    remainingChance.innerHTML = `${11 - noOfGuess}`;
    guessInput.removeAttribute('disabled');
    startOver.removeChild(p);
    Startplay = true;
  });
}
