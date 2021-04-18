'use strict';

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = _;
const value2 = _;
let path = '';

if (value1 === value2) { // value1 = true value2 = true; value1 = false value2= false
  path = 'if';

} else if (!value1 === !value2) { // value1 = NaN value2 = NaN 
  path = 'else if 1';

} else if (Number(value2) === Number(value1)) { // value1 = 1 value2 = '1'
  path = 'else if 2';

} else if (!(value1 || value2)) { // unreachable path
  path = 'else if 3';

} else { // value1 = true value2 = false; value1 = false value2 = true
  path = 'else'; 
}

console.log(path);
