'use strict';

function generateKey(length, possible)  {
  let result = '';
  for (let i = 0; i < length; i++) {
    const gNu = Math.floor(Math.random() * possible.length);
    result += possible[gNu];
  }
  return result;
}
console.log(generateKey(8, 'ABCDEFGHIJKLMNOPQRS'));

module.exports = { generateKey };
