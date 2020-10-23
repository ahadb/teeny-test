/**
 * Asserts that the value is not null explicitly using `===`
 */

module.exports = function(val) {
  if (val === null) {
    throw new Error(`The value is null!\nValue: ${val}`);
  }
};
