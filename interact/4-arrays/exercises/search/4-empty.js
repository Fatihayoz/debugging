'use strict';

alert( `Enter as many texts as you want, 
then enter a search query (case in-sensitive) 
-> only text that includes the query will be shown`
);

const strings = [];
while (true) {
  const input = prompt(`Enter text or click "cancel"`);

  if (input === null) {
    break;
  } else if (input === '') {
    alert('Enter something');
    continue;
  }
  strings.push(input);
}

let query = null;
while (query === null) {
  const input = prompt('Enter a search query');
  if (input !== null) {
    query = input.toLowerCase();
  }
}

const matches = [];
for (let text of strings) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes(query)) {
    matches.push(text);
  }
}

let message = `query: ${query}
matches: `;
for (const text of matches) {
  message += `${text}, `;
}

alert(message);


