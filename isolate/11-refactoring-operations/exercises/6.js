'use strict';
// even more math

const a = 1;
const b = 2;
const c = 3;
const d = 4;

const result = (b + (c - a * c)) / b;
console.log(result);

{
  // 1. (b + (c - a * c)) / b --> (2 + (3 - 1 * 3)) / 2 --> (2 + ( 3 - 3)) / 2 --> (2 + 0) / 2 --> 2/2 --> 1
}
