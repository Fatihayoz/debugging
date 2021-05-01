'use strict';

'use strict';

let toRepeat = '';
let repetitions = NaN;

let notConfirmed = false;
while (!notConfirmed) {
  toRepeat = prompt('enter a phrase, each character will be repeated:');

  if (toRepeat === '' || toRepeat === null) {
    alert('nope, enter something');
  } else {

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

    const confirmMessage =
      'is this correct?\n\n' + '- "' + toRepeat + '"\n' + '- ' + repetitions;
    notConfirmed = confirm(confirmMessage);
  }
}

let withRepeatedCharacters = '';

for (const character of toRepeat) {

  for (let i = 0; i < repetitions; i++) {
    withRepeatedCharacters += character;
  }
}

const finalMessage = `"${toRepeat}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
