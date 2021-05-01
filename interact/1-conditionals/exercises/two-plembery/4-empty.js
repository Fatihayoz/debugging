'use strict';

const instructions = `It is a two-player game.
Player 1:
  Enter three phrases
  
Player 2: 
  Look and memorize the phrases in order
  Enter them in order
  if you answer one wrong ---> GAME OVER
`;

alert (instructions);

alert ('Player 2, Go and hide');

const phrase1 = prompt ('Player 1, enter your first phrase: ');
const phrase2 = prompt ('Player 2, enter your first phrase: ');
const phrase3 = prompt ('Player 3, enter your first phrase: ');

alert ('Player 2, Get back');

const rememberPhrases = `Player 2, you have to remember these: 
1. '${phrase1}'
2. '${phrase2}'
3. '${phrase3}'
`;

alert (rememberPhrases);

let score = 0;
const guess1 = prompt ('Player 2, enter your first guess: ');
if (guess1 === phrase1) {
  score += 1;
  const guess2 = prompt ('Player 2, enter your second guess: ');
  if (guess2 === phrase2) {
    score += 1;
    const guess3 = prompt ('Player 2, enter your third guess: ');
    if (guess3 === phrase3) {
      score += 1;
    }
  }
}

alert(`your score: ${score}`);