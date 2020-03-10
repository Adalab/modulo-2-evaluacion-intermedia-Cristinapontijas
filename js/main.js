'use strict';

const guessBtn = document.querySelector('.js-input-btn');
const guessUserNumber = document.querySelector('.js-guess-number');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}

guessBtn.addEventListener('click', getRandomNumber);
