'use strict';

function random(min, max) {
  const firstCalculation = Math.random() * (max - min);
  return Math.floor(firstCalculation) + min;
}

module.exports = { random };
