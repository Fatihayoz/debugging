'use strict';

const word = 'pitsicola';

let index = 0;
let logThisOne = true;
while (index < word.length) {

  const nextLetter = word[index];

  index += 1;
  logThisOne = !logThisOne;

  if (index >= word.length + 1) {
    break;
  }

  console.log(index + ': ' + nextLetter);

}

console.assert(index === 9, 'there are this many letters in the word');
