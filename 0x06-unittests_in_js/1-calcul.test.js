const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // Test suite for type == "SUM"
  describe('type == "SUM"', () => {
    // Test case for equal positive numbers
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    // Test case for positive numbers that round differently
    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    // Test case for equal negative numbers
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    // Test case for negative numbers that round differently
    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    // Test case for a negative and a positive number
    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    // Test case for a positive and a negative number
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    // Test case for both numbers being zero
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  // Test suite for type == "SUBTRACT"
  describe('type == "SUBTRACT"', () => {
    // Test case for equal positive numbers
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    // Test case for positive numbers that round differently
    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    // Test case for equal negative numbers
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    // Test case for negative numbers that round differently
    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    // Test case for a negative and a positive number
    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    // Test case for a positive and a negative number
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    // Test case for both numbers being zero
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  // Test suite for type == "DIVIDE"
  describe('type == "DIVIDE"', () => {
    // Test case for positive numbers
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    // Test case for numbers with different signs
    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    // Test case for numbers with different signs (alternate)
    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    // Test case for negative numbers
    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    // Test case for equal positive numbers
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    // Test case for equal negative numbers
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    // Test case for positive numbers that round differently
    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    // Test case for positive numbers that round differently
    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    // Test case for zero and a positive number
    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    // Test case for zero and a negative number
    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    // Test case for positive number and zero
    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    // Test case for positive number and a number rounded down to zero
    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    // Test case for positive number and a number rounded up to zero
    it('positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    // Test case for negative number and zero
    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    // Test case for negative number and a number rounded down to zero
    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    // Test case for negative number and a number rounded up to zero
    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    // Test case for both numbers being zero
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
