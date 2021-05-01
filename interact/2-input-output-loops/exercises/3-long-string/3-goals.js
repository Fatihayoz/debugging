'use strict';

let userInput = '';
let controlVariable = true;
while (controlVariable) {
  /* -- BEGIN: validate input -- */

  userInput = prompt ('Enter something longer than 5 characters')

  if (userInput === '' || userInput === null) {
    alert ('Please, enter something longer than 5 characters');
    continue;
  } 
  
  if (userInput.length <= 5) {
    alert ('Too short');
    continue;
  }

  controlVariable = false;
  
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
