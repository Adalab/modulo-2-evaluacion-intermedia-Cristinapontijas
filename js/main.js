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

function getPlayerNumber() {
  let playerNumberValue = playerNumber.value;
  console.log(playerNumberValue);
  if (randomNumber === parseInt(playerNumberValue)) {
    clueInput.value = '¡Olé, lo has adivinado!';
    console.log('¡Olé, lo has adivinado!');
  } else if (playerNumberValue > randomNumber) {
    clueInput.value = 'Prueba con un número más pequeño...';
    console.log('Prueba con un número más pequeño...');
  } else if (playerNumberValue < randomNumber) {
    clueInput.value = '¡Ui! Prueba con un número más grande...';
    console.log('¡Ui! Prueba con un número más grande...');
  } else {
    clueInput.value = 'Uhm, no sé...Prueba con un número del 1 al 100.';
    console.log('Uhm, no sé...Prueba con un número del 1 al 100.');
  }
}

guessBtn.addEventListener('click', getPlayerNumber());
