/**
 * tests if the target throws, can be faster without try / catch
 */

module.exports = (fn) => {
  try {
    fn()
  } catch (err) {
    console.log(err)
  }
};
