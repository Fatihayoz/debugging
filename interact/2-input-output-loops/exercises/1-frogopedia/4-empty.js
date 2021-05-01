'use strict';

let userInput = '';
while (true) {
  userInput = prompt ('Tell me about something about frogs');

  if (userInput === '' || userInput === null) {
    prompt ('Please enter something about frogs');    
  } else if (userInput.search(/frog/i) > -1) {
    break;
  } else {
    alert ('Try again');
  }
}

alert (`I learned something about frogs: 
'${userInput}'`);


