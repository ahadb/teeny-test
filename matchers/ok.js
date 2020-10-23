/**
 * Assertion test, whether value is truthy
 */

module.exports = function(val) {
  if (val) {
    return true
  }

  throw new Error(`The value is falsy.\nValue: ${val}`);
};
