const { default: TestRunner } = require("jest-runner");
const addFive = require('./addFive');

test('returns the numer plus S', () => {
    expect(addFive(1)).toBe(6);
});
