'use strict';

/*

  look out for:
  - I/O control flow
  - pushing the right values
  - for loop heads

*/

alert(
  `enter as many words as you want

then enter a length
-> only words of the right length will remain`
);

// -- gather words --
const words = [];
while (true) {
  const input = prompt('enter a word or click "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
  } else {
    const containsWhitespace = new RegExp('\\s', 'g').test(input);
    if (containsWhitespace) {
      alert("words can't have white space");
    } else {      
      words.push(input);
    }
  }
}

// -- get the length to filter --
let lengthToKeep;
let isNumber = false;
while (!isNumber) {
  const input = prompt('how long should the words be? enter a number:');
  lengthToKeep = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
    continue;
  }

  if (Number.isNaN(lengthToKeep)) {
    alert(`"${input}" is not a number`);
  } else {
    isNumber = true;
  }
}

// -- keep only words with the right length --
const keepThese = [];
for (const word of words) {
  if (word.length === lengthToKeep) {
    keepThese.push(word);
  }
}

// -- generate a message for the user --
let message = `length: ${lengthToKeep}\nwords: `;
for (const word of keepThese) {
  message += `${word}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(words, lengthToKeep, keepThese);
