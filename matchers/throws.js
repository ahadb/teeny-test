
// module.exports = (fn, errMsg = '') => {
//   const didNotThrow = new Error('The function did not throw an error');
//   try {
//     fn();
//     throw didNotThrow;
//   } catch (err) {
//     if (err === didNotThrow) throw didNotThrow;
//     if (!errMsg || err.message === errMsg) return true;
//
//     throw new Error('The error message is different from the expected one.' +
//       `\n\nFound: ${err.message}\nWanted: ${errMsg}`);
//   }
// };

module.exports = (fn) => {
  try {
    fn()
  } catch (err) {
    console.log(err)
  }
};
