'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt ('Enter your name: ');

  if (userInput === '' || userInput === null) {
    alert ('Nothing is not a name');
    continue;
  }

  const confirmMessage = `Is this correct: '${userInput}'?`;
  const userConfirmed = confirm (confirmMessage);
  if (userConfirmed) {
    break;
  }

  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
