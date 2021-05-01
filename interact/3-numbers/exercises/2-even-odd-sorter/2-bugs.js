'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN;
let userNumberisNaN = true;
while (userNumberisNaN) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    continue;
  }

  userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  } else {
    userNumberisNaN = false;
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
