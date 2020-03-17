'use strict';

// random number generator
function getRandomNumber(max) {
  return Math.ceil(Math.random() * 101);
}

const randomNumber = getRandomNumber();
console.log(randomNumber);

// get input value for player number
const guessBtn = document.querySelector('.js-btn');
const playerNumber = document.querySelector('.js-input-number');
const clueInput = document.querySelector('.js-input-clue');
const clueAttempt = document.querySelector('.js-input-attempt');

function getPlayerNumber(ev) {
  ev.preventDefault();
  let playerNumberValue = playerNumber.value;
  console.log(playerNumberValue);

  if (randomNumber === parseInt(playerNumberValue)) {
    clueInput.value = '¡Olé, lo has adivinado!';
  } else if (randomNumber < playerNumberValue) {
    clueInput.value = 'Prueba con un número más pequeño...';
  } else if (randomNumber > playerNumberValue) {
    clueInput.value = '¡Ui! Prueba con un número más grande...';
  } else {
    clueInput.value = 'Uhm, no sé...Prueba con un número del 1 al 100.';
  }
}

guessBtn.addEventListener('click', getPlayerNumber);

// paint clue

function paintClue() {}
