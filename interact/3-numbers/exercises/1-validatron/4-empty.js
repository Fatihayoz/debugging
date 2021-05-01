'use strict';

const userString = prompt('Enter a "number: "');

const inputNumber = Number(userString);
const inputIsANumber = !Number.isNaN(inputNumber);

const confirmMessage =
  `Are you sure that you entered a number? 
  Yes ---> Press 'OK',
  No  ---> Press 'Cancel'`;

const userThinksItsANumber = confirm(confirmMessage);

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('Correct!');
} else {
  alert('Nope :(');
}
