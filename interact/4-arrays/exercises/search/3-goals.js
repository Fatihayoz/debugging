'use strict';

alert(
  `enter as many texts as you want

then enter a search query (case in-sensitive)
-> only text that includes the query will be kept`
);

// -- gather strings --
const strings = [];

while (true) {
  /* === BEGIN: gather text entries from the user == */

  const input = prompt('enter some or click "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);


  /* === END == */
}

// -- get search query --
let query = null;

while (query === null) {
  /* === BEGIN: gather a lower-case query from the user == */

  const input = prompt('enter a search query');
  if (input !== null) {
    query = input.toLowerCase();
  }

  /* === END == */
}

// -- keep only strings that include the search query --
const matches = [];
/* === BEGIN: filter for text entries that include the query == */

for (const text of strings) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes(query)) {
    matches.push(text);
  }
}

/* === END == */

// -- generate a message for the user --
let message = `query: ${query}\nmatches: `;
for (const text of matches) {
  message += `${text}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(strings, query, matches);
