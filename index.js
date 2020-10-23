/**
 * A quick experimental project for unit testing with custom matchers
 *
 * @description: uses regular functions as opposed to prototype, as it normalizes this will be refactored
 *
 * @author: Ahad Bokhari
 * @version: 1.0.0
 */

const colors = require('colors');
const matchers = require('./matchers');
const {
  indent,
  indentLines,
  logIndent,
  logIndentLines
} = require('./utils/utils');

const globals = {
  messages: {
    pass: 'PASS',
    fail: 'FAIL',
    disabled: 'DISABLED'
  },
  indentLevel: 0
};

/**
 * Describe function used to describe a suite of tests
 *
 * @example
 *
 * describe('Description here', () => { ... })
 *
 * @function
 * @params: title, callback
 *
 */

function describe(title, callback) {
  const strTitle = `${title}`.white;

  globals.indentLevel++;
  logIndent(indent(globals.indentLevel), strTitle);
  callback();
  globals.indentLevel--;
}

/**
 * Test function used to encapsulate a test
 *
 * @example
 *
 * test('does something that either passes or fails', () => { ... })
 *
 * @function
 * @params: desc, callback
 *
 */

function test(desc, callback) {
  const msgPass = `${globals.messages.pass.bgGreen.black + ' -'.white} ${desc.gray}` + ' OK ✔'.green;
  const msgFail = `${globals.messages.fail.bgRed.white + ' -'.gray} ${desc.gray}`;

  try {
    callback();
    logIndent(indent(globals.indentLevel + 1), msgPass);
  } catch (err) {
    logIndent(indent(globals.indentLevel + 1), msgFail);
    logIndentLines(indentLines('', globals.indentLevel + 2));
    //logIndentLines(indentLines(e.stack.red, globals.indentLevel + 2));
    console.log(indentLines('', globals.indentLevel + 2));
  }
}

/**
 * Function to disable a test
 *
 * @example
 *
 * xTest('disables a test', () => { ... })
 *
 * @function
 * @params: desc
 *
 */

function xTest(desc) {
  const msgDisabled = `${globals.messages.disabled.bgWhite.black} ${desc.gray}`;

  logIndent(indent(globals.indentLevel + 1), msgDisabled);
}

/**
 * Assert base function, used in conjunction with assigned matchers
 *
 * @example
 *
 * assert(2 == "2"));
 *
 * @function
 * @params: val
 *
 */

function assert(val) {
  if (val) return true;

  throw new Error('Assertion failed.');
}

Object.assign(assert, matchers);

exports.describe = describe;
exports.test = test;
exports.assert = assert;
exports.xTest = xTest;
