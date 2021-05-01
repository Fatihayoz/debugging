'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
const inputNumber = Number(userString);
const inputIsANumber = !Number.isNaN(inputNumber);
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const confirmMessage =
  `Are you sure that you entered a number? 
  Yes ---> Press 'OK',
  No  ---> Press 'Cancel'`;
const userThinksItsANumber = confirm(confirmMessage);
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
