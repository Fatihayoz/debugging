'use strict';

let validInput = '';

let index = 0;
while (true) {
  index = index + 1;

  const userInput = prompt( `enter anything with "e" or "E" as the ${index}th letter`);

  if (userInput === null || userInput === '') {
    alert('that is nothing');
    continue;
  }

  if (userInput.length < index) {
    alert('too short');
    continue;
  }

  if (userInput[index] === 'e' || userInput[index] === 'E') {
    validInput = userInput;
    break;
  }

  alert(`input has no "e" or "E" as the ${index}th character`);

}

alert('done: "' + validInput + '"');
