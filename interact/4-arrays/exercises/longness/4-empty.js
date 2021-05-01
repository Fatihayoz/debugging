'use strict';


alert(
  `enter as many words as you want
then enter a length
-> only words of the right length will remain`
);

const words = [];
while (true) {
  const input = prompt('enter a word or click "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  const containsWhitespace = new RegExp('\\s', 'g').test(input);
  if (containsWhitespace) {
    alert("words can't have white space");
  } else {
    words.push(input);
  }
}


let lengthToKeep = NaN;
while (true) {
  const input = prompt('how long should the words be? enter a number:');
  lengthToKeep = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
  } else if (Number.isNaN(lengthToKeep)) {
    alert(`"${input}" is not a number`);
  } else {
    break;
  }
}

const keepThese = [];
for (const word of words) {
  const isCorrectLength = word.length === lengthToKeep;
  if (isCorrectLength) {
    keepThese.push(word);
  }
}


let message = `length: ${lengthToKeep}\nwords: `;
for (const word of keepThese) {
  message += `${word}, `;
}


alert(message);