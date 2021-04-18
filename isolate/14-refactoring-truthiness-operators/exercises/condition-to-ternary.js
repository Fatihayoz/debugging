'use strict';

// refactor this code to use a _?_:_ instead of a conditional

const isLoggedIn = true;
const secretInformation = isLoggedIn ? true : false;
const warningMessage = isLoggedIn ? false : true;
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay;
if (isLoggedIn) {
  toDisplay = secretInformation;
} else {
  toDisplay = warningMessage;
}
console.log(toDisplay);
