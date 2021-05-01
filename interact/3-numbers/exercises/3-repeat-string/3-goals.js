'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt ('Enter a phrase to repeat: ')

  if (userInput === '' || userInput === null) {
    alert ('Please, enter something: ');
    continue;
  }

  const repetitionsInput = prompt ('How many times do you want to repeat the phrase?');

  repetitions = Number(repetitionsInput);
  /* -- END -- */

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmationMessage = `Do you really want to repeat "${userInput}" "${repetitionsInput}" times?`;
  const confirmation = confirm (confirmationMessage);

  if (confirmationMessage) {
    break;
  }
  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */
let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
