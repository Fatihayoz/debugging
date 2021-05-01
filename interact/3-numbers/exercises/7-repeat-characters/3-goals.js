'use strict';

let toRepeat = '';
let repetitions = NaN;

let notConfirmed = false;
while (!notConfirmed) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {
    /* -- BEGIN: get a number from the user -- */
    while (true) {
      const userNumber = prompt('How many times do you want to repeat each character?');

      if (userNumber === null || userNumber === '') {
        alert ('enter a number');
        continue;
      }

      repetitions = Number(userNumber);

      if (Number.isNaN(repetitions)) {
        alert (`"${userNumber}" is not a number`);
      } else {
        break;
      }
    }

    /* -- END -- */

    const confirmMessage =
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions;
    notConfirmed = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

/* -- BEGIN: repeat each character in the string -- */

for (const character of toRepeat) {

  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}
/* -- END -- */

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
