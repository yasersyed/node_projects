const mathOp = require('../src/totest/calculator');

describe('calculator tests', () => {
    test('addition', () => {
        var result = mathOp.sum(1,2);
        expect(result).toBe(3);
    });
});