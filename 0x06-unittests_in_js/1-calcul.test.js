const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('type == SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.3', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.3), 0);
    });
  });

  describe('type == SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -2 when inputs are -1.4 and 0.3', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 0.3), -2);
    });
  });

  describe('type == DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when inputs are 1.4 and 0.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });
});
