/**
 * Asserts that value is strictly (`!==`) to false
 */

module.exports = function(val, message) {
  if (val !== true) {
    return message;
  }
};
