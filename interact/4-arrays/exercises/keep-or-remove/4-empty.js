'use strict';

alert(`Enter as many inputs as you want.
When you finish, press 'cancel'`
);

const inputsAll = [];

while (true) {
  const input = prompt('Enter the next phrase or press "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('Enter something');
  } else {
    inputsAll.push(input);
  }
}

const keepInputs = [];
for (let i = 0; i < inputsAll.length; i++) {
  const keep = confirm(`do you want to keep "${inputsAll[i]}"?`);
  if (keep) {
    keepInputs.push(inputsAll[i]);
  }
}

let message = '';
for (const text of keepInputs) {
  message += `- "${text}"\n`;
}

alert(message);
