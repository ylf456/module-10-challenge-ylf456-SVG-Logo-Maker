// Constructor Arithmetic is imported.
const shapeTest = require('./shape.js');

// A testing suite for Arithmetic is created.
describe('testingShape', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('circleShape', () => {
    it('have a round shape if the given shape parameter is circle', () => {
      const total = 4;
      const arithmetic = new Calculator(2, 2, "sum");
      expect(arithmetic.sum()).toEqual(total);
    });
  });
});