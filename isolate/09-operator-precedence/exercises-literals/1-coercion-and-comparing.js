'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, 'Step 0');

/*

*/
const step1 = typeof false === typeof true;
console.assert(step1 === expected, 'Step 1');

/*

*/
const step2 = typeof 'abcd' === typeof '123';
console.assert(step2 === expected, 'Step 2');

/*

*/
const step3 = typeof 12 === typeof Infinity;
console.assert(step3 === expected, 'Step 3');
