const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return correct sum for positive integers', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });

    it('should return correct sum for negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', -2, -3), -5);
    });

    it('should return correct sum for positive and negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', 2, -3), -1);
    });

    it('should return correct sum for positive floats', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, 3.2), 6);
    });

    it('should return correct sum for numbers around .5 boundary', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 2.5), 5);
    });

    it('should return correct sum for zero values', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return correct difference for positive integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });

    it('should return correct difference for negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, -3), -2);
    });

    it('should return correct difference for positive and negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, -3), 8);
    });

    it('should return correct difference for positive floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.1, 3.1), 2);
    });

    it('should return correct difference for numbers around .5 boundary', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.4), 0);
    });

    it('should return correct difference for zero values', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return correct quotient for positive integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });

    it('should return correct quotient for negative integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, -3), 2);
    });

    it('should return correct quotient for positive and negative integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, -3), -2);
    });

    it('should return correct quotient for positive floats', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.1, 3.1), 2);
    });

    it('should return correct quotient for numbers around .5 boundary', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.5), 1);
    });

    it('should return "Error" for division by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
    });

    it('should return "Error" for numbers around zero boundary', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0.2), 'Error');
    });

    it('should return correct quotient for zero numerator', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
    });
  });
});
