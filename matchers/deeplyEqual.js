/**
 * tests deep equality with `===`
 */

module.exports = function(actual, expected) {
  if (actual !== expected) {
    throw new Error(`The values are not deeply equal!\nActual: ${actual} \nExpected: ${expected}`);
  }
};
