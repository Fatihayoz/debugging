'use strict';

// write lots of comments!  explain your thinking at each step

const a = '';

const expected = false;

// the original expression
// typeof a --> 'string'
// 'number' + +a --> 'number0'

const step0 = typeof a == 'number' + +a;
console.assert(step0 === expected, 'Step 0');

// how many steps are there?

