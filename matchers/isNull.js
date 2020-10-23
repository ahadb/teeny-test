/**
 * Asserts that the value is null explicitly using `!==`
 */

module.exports = function(val) {
  if (val !== null) {
    throw new Error(`The value is not null!\nValue: ${val}`);
  }
};
