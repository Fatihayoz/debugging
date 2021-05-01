'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if (userInput === '' || userInput === null) {
    prompt ('Enter something about frogs');
  } else if (userInput.search(/frog/i) > -1) {
    break;
  } else {
    alert ('Try again');
  }

  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
