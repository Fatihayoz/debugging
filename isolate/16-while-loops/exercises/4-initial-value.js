'use strict';

/* Initial Value

  write the initial value for sum to pass the assertion

  sum is used as an accumulating variable
    with each iteration it grows
    accumulating the data until it reaches a correct value

*/


/* fill in the initial value to pass the assertion
  there are more than 1 correct answer!
  how many can you find?
  what do all the correct answers have in common?
*/
let sum = 2; // sum = 1 (alternatively) // RULE sum = 2 or sum = 2**n (n<7) || sum = 1 or sum = 2**n - 1 (n<7)

while (sum < 100) {

  if (sum % 2 === 0) {
    sum += sum;
    console.log('if path:', sum);

  } else {
    sum += 1;
    console.log('else path:', sum);
  }
}

console.assert(sum === 128, 'the sum should be 128');

