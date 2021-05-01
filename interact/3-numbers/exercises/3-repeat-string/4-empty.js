'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  
  userInput = prompt ('Enter a phrase to repeat: ')

  if (userInput === '' || userInput === null) {
    alert ('Please, enter something: ');
    continue;
  }

  const repetitionsInput = prompt ('How many times do you want to repeat the phrase?');

  repetitions = Number(repetitionsInput);
  

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  const confirmationMessage = `Do you really want to repeat "${userInput}" "${repetitionsInput}" times?`;
  const confirmation = confirm (confirmationMessage);

  if (confirmationMessage) {
    break;
  }
  
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);