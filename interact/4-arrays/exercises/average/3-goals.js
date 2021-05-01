'use strict';

/*
  gather numbers from a user until they enter "done"
  then average the numbers and display the result
*/

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be averaged`
);

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const numbers = [];
/* -- BEGIN: gather users numbers -- */

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

/* -- END: gather users numbers -- */

let sum = 0;
/* -- BEGIN: add the numbers together -- */

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;
}

/* -- END: add the numbers together -- */

const average = sum / numbers.length;

let message = `numbers: `;
for (const number of numbers) {
  message += `${number}, `;
}
message += `\naverage: ${average}`;

alert(message);
