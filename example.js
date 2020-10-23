const {test, assert, describe, xTest} = require('./index');
const testUtils = require('./test-utils');

describe('Prime Numbers', () => {
  test('returns true for prime numbers', () => {
    assert(testUtils.isPrimeNumber(2));
    assert(testUtils.isPrimeNumber(3));
    assert(testUtils.isPrimeNumber(5));
    assert(testUtils.isPrimeNumber(7));
    assert(testUtils.isPrimeNumber(23));
  });
  test('returns false for non-prime numbers', () => {
    assert(!testUtils.isPrimeNumber(4));
    assert(!testUtils.isPrimeNumber(8));
    assert(!testUtils.isPrimeNumber(10));
    assert(!testUtils.isPrimeNumber(20));
    // t(!numberUtils.isPrimeNumber(19));
  });
  test('general assert', () => {
    assert(1 == 1);
  })
});

describe('Disabled Test', () => {
  xTest('returns false for non-prime numbers', () => {
    assert(!testUtils.isPrimeNumber(4));
    assert(!testUtils.isPrimeNumber(8));
    assert(!testUtils.isPrimeNumber(10));
    assert(!testUtils.isPrimeNumber(20));
  });
});

describe('Test Matchers', () => {
  test('ok, notOk, equal, strictEqual, isNull, isNotNull', () => {

    const notNull = 'not a null value';

    assert.ok('abc');
    assert.notOk(null);
    assert.equal(1, 1);
    assert.notEqual(1, 2);
    assert.strictEqual(2, 2);
    assert.isNull(null);
    assert.isNotNull(notNull);
  });

  test('Assert Throws', () => {
    function getRectArea(width, height) {
      if (isNaN(width) || isNaN(height)) {
        throw 'The parameter is not a number!';
      }
    }

    assert.throws(getRectArea(3, 3))
  })
});
