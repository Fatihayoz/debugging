'use strict';

/*
  gathers input from a user until they cancel
  then allows the user to filter out the ones they don't want anymore
*/

alert(
  `enter as many inputs as you want.

When you're done entering allInputs press "cancel"`
);

// -- gather user input --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const allInputs = [];
let donePushing = false;
while (!donePushing) {
  const input = prompt('enter the next phrase or press "cancel"');

  // -- validate the input --
  if (input === null) {
    // -- check if the user is done --
    donePushing = true;
  } else if (input === '') {
    // -- check if the user input nothing --
    alert('nothing is not allowed');
  } else {
    // -- push the input --
    allInputs.push(input);
  }
}

// -- allow the user to filter their inputs --
const keepThese = [];
for (let i = 0; i < allInputs.length; i++) {
  const keepIt = confirm(`do you want to keep "${allInputs[i]}"?`);
  if (keepIt) {
    keepThese.push(allInputs[i]);
  }
}

// -- build the final message --
let message = '';
for (const text of keepThese) {
  message += `- "${text}"\n`;
}

// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(allInputs, keepThese);
