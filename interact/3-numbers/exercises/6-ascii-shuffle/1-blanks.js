'use strict';

let userInput = '';
let asciiShift = NaN;

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt(
    'enter a phrase, each character will be shifted by character code:'
  );

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  while (!userConfirmed) {
    const asciiShiftInput = prompt(
      'how many ascii numbers do you want the characters to shift?'
    );

    if (asciiShiftInput === null || asciiShiftInput === '') {
      alert('enter something');
      continue;
    }

    asciiShift = Number(asciiShiftInput);

    if (Number.isNaN(asciiShift)) {
      alert('"' + asciiShiftInput + '" is not a number');
    } else {
      break;
    }
  }
  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + asciiShift;
  userConfirmed = confirm(confirmMessage);
}

let encodedString = '';

for (const character of userInput) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + asciiShift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}

const finalMessage = `"${userInput}" -> "${encodedString}"`;
alert(finalMessage);

