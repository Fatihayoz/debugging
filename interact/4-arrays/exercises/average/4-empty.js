'use strict';

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be averaged`
);

const numbers = [];

while (true) {
  const input = prompt('enter the next number or "done"');

  if (input === null || input === '') {
    alert ('Nothing si not allowed');

  } else if (input === 'done') {
    break;
  } else {
    const nextNumber = Number (input);
  
    if (Number.isNaN(nextNumber)) {
      alert (`"${input}" is not a number`);
    } else {

      numbers.push(nextNumber);
    }
  }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;
}

const average = sum / numbers.length;

let message = `numbers: `;
for (const number of numbers) {
  message += `${number}, `;
}
message += `\naverage: ${average}`;

// -- alert the final message --
alert(message);