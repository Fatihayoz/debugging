'use strict';

/* Reverser

  write a function that reverses a string, with all the good practices

  - documentation
  - default parameters

*/

/**
 * reverses a string of text
 * @param text {string} - the string of text to return
 * @returns {string} reversed version of the original string
 */
const reverse = (text = '') => {
  let reversedText = '';
  for (let i = text.length-1; i >= 0 ; i--) {
    reversedText += text[i];
  } return reversedText; 

  /*
  let reversedText = '';
  let i = text.length-1;
  while (i >= 0) {
    reversedText += text[i];
    i--;
  } return reversedText;
  */

};

const _1_expect = 'aaaa';
const _1_actual = reverse('aaaa');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = reverse('');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = '!yoh';
const _3_actual = reverse('hoy!');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'cba';
const _4_actual = reverse('abc');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = '-+-';
const _5_actual = reverse('-+-');
console.assert(_5_actual === _5_expect, 'Test 5');

// test default parameter
const _6_expect = '';
const _6_actual = reverse();
console.assert(_6_actual === _6_expect, 'Test 6: default parameter');
