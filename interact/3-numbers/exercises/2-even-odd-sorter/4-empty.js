'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    continue;;
  }

  userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  } else {
    break;
  }

}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
