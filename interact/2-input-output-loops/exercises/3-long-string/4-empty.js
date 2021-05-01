'use strict';

let userInput = '';
let variable = true;
while (variable) {
  userInput = prompt('Enter anything longer than 5 characters');

  if (userInput === '' || userInput === null) {
    alert ('Enter something');
    continue;
  }

  if (userInput.length <= 5) {
    alert('Too short');
    continue;
  }

  variable = false;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);

