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

function getPlayerNumber() {
  const playerNumberValue = playerNumber.value;
  console.log(playerNumberValue);
  if (randomNumber === parseInt(playerNumberValue)) {
    console.log('¡Olé, lo has adivinado!');
  } else if (playerNumberValue > randomNumber) {
    console.log('Prueba con un número más pequeño...');
  } else if (playerNumberValue < randomNumber) {
    console.log('¡Ui! Prueba con un número más grande...');
  } else {
    console.log('Uhm, no sé...Prueba otra vez.');
  }
}

guessBtn.addEventListener('click', getPlayerNumber());
