'use strict';

alert(`Remembery, the game of remembering.

You will be prompted to enter 3 phrases.
next you will be prompted to remember one of them

if you enter it exactly, you win!`);

let input2 = '';
let input1 = '';
let input3 = '';

while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first secret phrase:');
}
while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second secret phrase:');
}
while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third secret phrase:');
}

alert('all saved! get ready to remember');

const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * 3;
const randomFrom1To3 = Math.ceil(decimalTimes3);

let correctAnswer = '';
if (randomFrom1To3 === 1) {
  correctAnswer = input1;
} else if (randomFrom1To3 === 2) {
  correctAnswer = input2;
} else if (randomFrom1To3 === 3) {
  correctAnswer = input3;
}

/* -- BEGIN: check if the user was correct and let them know -- */
const attempt = 'Enter phrase number ' + randomFrom1To3;
const userGuess = prompt(attempt);

const guessIsCorrect = userGuess;

if (guessIsCorrect) {
  const successMessage = 'Correct! Phrase ' + randomFrom1To3 + ' was ' + '"' + correctAnswer + '"';
  alert (successMessage); 
} else {
  const failMessage = 'Try again later :(';
  alert (failMessage);
}

/* -- END: check if the user was correct and let them know -- */
