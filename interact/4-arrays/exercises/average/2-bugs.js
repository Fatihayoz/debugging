'use strict';

/*

  look out for:
  - off-by-1 mistakes
  - array methods
  - ;)

*/

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be averaged`
);

// -- gather user input --
const numbers = [];

while (true) {
  const input = prompt('enter the next number or "done"');

  // -- validate the input --
  if (input === null || input === '') {
    alert ('Nothing si not allowed');
  // -- check if the user is done --
  } else if (input === 'done') {
    break;
  } else {
    const nextNumber = Number (input);
  // -- alert if input was not a number --  
    if (Number.isNaN(nextNumber)) {
      alert (`"${input}" is not a number`);
    } else {
  // -- push the input if it was a number --
      numbers.push(nextNumber);
    }
  }
}

// -- calculate the sum --
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;
}

// -- calculate the average --
const average = sum / numbers.length;

// -- build the final message --
let message = `numbers: `;
for (const number of numbers) {
  message += `${number}, `;
}
message += `\naverage: ${average}`;

// -- alert the final message --
alert(message);
