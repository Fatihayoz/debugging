'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`
  );

  /* -- BEGIN: validate input -- */

  if (userInput === null || userInput === '') {
    alert('That is nothing');
    continue;
  }

  if (userInput.length < index) {
    alert('Too short');
    continue;
  }

  if (userInput[index] === 'e' || userInput[index] === 'E') {
    validInput = userInput;
    isValid = true;
    break;
  }
  
  alert(`input has no "e" or "E" as the ${index}th character`);
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
