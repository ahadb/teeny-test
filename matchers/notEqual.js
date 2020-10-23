/**
 * tests shallow inequality with `==`
 */

module.exports = function(actual, expected) {
  if (arguments.length < 2) {
    throw new Error('Missing arguments, 2 are expected');
  }
  if (actual == expected) {
    throw new Error(`The values are not equal!\nActual: ${actual} \nExpected: ${expected}`);
  }
};
