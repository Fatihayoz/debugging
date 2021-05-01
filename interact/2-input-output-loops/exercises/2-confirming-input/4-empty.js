'use strict';

let userInput = '';
let isValid = false;
while (!isValid) {
  userInput = prompt ('Enter your name: ');

  if (userInput === '' || userInput === null) {
    alert ('Enter a valid name: ');
    continue;
  }

  const confirmMessage = `Is it correct '${userInput}'?`;
  const userConfirmation = confirm (confirmMessage);
  if (userConfirmation) {
    break;
  }
}

const finalMessage = `Your name is '${userInput}'`;
alert (finalMessage);


