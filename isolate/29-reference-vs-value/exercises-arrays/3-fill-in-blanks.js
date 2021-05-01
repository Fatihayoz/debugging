'use strict';

// two different arrays with the same values
//  how many solutions can you find?
// psst.  use JS Tutor & the debugger

const array1 = [0,1,2];
const array2 = [1,0,2];

const test1 = array1 !== array2;
console.assert(test1, 'Test 1');

const comparison = deepCompare(array1, array2);
const test2 = !comparison;
console.assert(test2, 'Test 2');

// prettier-ignore
function deepCompare (actual, expect) {  return actual === expect || Object.is(actual, expect)|| (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))|| Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));}
