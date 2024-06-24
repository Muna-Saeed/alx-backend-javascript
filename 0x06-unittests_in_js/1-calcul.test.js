const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operations', () => {
    it('should return 4 for inputs 2.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('should return 4 for inputs 2.3 and 1.8', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('should return -4 for inputs -2.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('should return -4 for inputs -2.3 and -1.8', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('should return 0 for inputs -2.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('should return 0 for inputs 2.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('should return 0 for inputs 0.0 and 0.0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('SUBTRACT operations', () => {
    it('should return 0 for inputs 2.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('should return 0 for inputs 2.3 and 1.8', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('should return 0 for inputs -2.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('should return 0 for inputs -2.3 and -1.8', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('should return -4 for inputs -2.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4);
    });

    it('should return 4 for inputs 2.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4);
    });

    it('should return 0 for inputs 0.0 and 0.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('DIVIDE operations', () => {
    it('should return 4 for inputs 8.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4);
    });

    it('should return -3.5 for inputs -7.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('should return -3.5 for inputs 7.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('should return 3.5 for inputs -7.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('should return 1 for inputs 2.0 and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('should return 1 for inputs -2.0 and -2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('should return 1 for inputs 2.6 and 3.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('should return 1 for inputs 2.4 and 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('should return 0 for inputs 0.0 and 5.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('should return 0 for inputs 0.0 and -5.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), 0);
    });

    it('should return "Error" for inputs 5.0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('should return "Error" for inputs 5.0 and 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('should return "Error" for inputs 5.0 and -0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('should return "Error" for inputs -5.0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('should return "Error" for inputs -5.0 and 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('should return "Error" for inputs -5.0 and -0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('should return "Error" for inputs 0.0 and 0.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
