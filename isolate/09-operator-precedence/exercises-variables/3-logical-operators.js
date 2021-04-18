'use strict';

// write lots of comments!  explain your thinking at each step

const a = null;
const b = 'null';

const expected = true;

// the original expression

// !!a --> !(true) --> false
// !!b --> !(false) --> true
// || left is false then evaluates right
const step0 = !!a || !!b;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?

