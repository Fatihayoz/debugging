'use strict';

const instructions = `You will enter 3 phrases,
then you wil be asked to enter one randomly,
if you enter the correct phrase, you win!`;

alert (instructions);

let userInput1 = null;
let userInput2 = null;
let userInput3 = null;

while (userInput1 === '' || userInput1 === null) {
  userInput1 = prompt ('Enter the first phrase: ');
}

while (userInput2 === '' || userInput2 === null) {
  userInput2 = prompt ('Enter the second phrase: ');
}

while (userInput3 === '' || userInput3 === null) {
  userInput3 = prompt ('Enter the third phrase: ');
}

alert (`All your entries are saved!
Ready to remember?`);

const randomFrom1To3 = Math.ceil(Math.random()*3);

let guess = '';
if (randomFrom1To3 === 1) {
  guess = userInput1;
} else if (randomFrom1To3 === 2) {
  guess = userInput2;
} else if (randomFrom1To3 === 3) {
  guess = userInput3;
}

const guessMessage = 'Enter phrase number ' + randomFrom1To3;
const userGuess = prompt (guessMessage);

const correctGuess = userGuess;
if (correctGuess) {
  const successMessage = 'You win';
  alert (successMessage);
} else {
  const unsuccessMessage = 'You lost';
  alert (unsuccessMessage);
}

