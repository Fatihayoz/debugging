'use strict';

// refactor this code to use a condition instead of ||

const firstName = 'Ayöz';
const lastName = 'Antwerpen';
console.log(firstName, lastName);

const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
console.log(hasAnAName);
