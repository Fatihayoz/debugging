'use strict';

// write lots of comments!  explain your thinking at each step

const a = false;

const expected = true;

// the original expression
// !!+a --> !!(0) --> !true --> false
// Boolean(Number(a)) --> Boolean(0) --> false

const step0 = !!+a == Boolean(Number(a));
console.assert(step0 === expected, 'Step 0');

// how many steps are there?

