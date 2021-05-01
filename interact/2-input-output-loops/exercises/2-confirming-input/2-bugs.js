'use strict';

/* look out for:

  - look condition
  - conditional checks
  - which interaction functions are used

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  const userDidConfirmed = confirm (confirmMessage);
  if (userDidConfirmed) {
    break;
  }
    
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
