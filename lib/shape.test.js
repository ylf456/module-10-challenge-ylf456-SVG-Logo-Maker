const shapeTest = require('./shape');

describe('testingShape', () => {
  describe('circleShape', () => {
    it('have a round shape if the given shape parameter is circle', () => {
    const shapeData1 = '<circle cx="150" cy="100" r="80" fill="green" />';
    const newtest = new shapeTest('circle','green');
      expect(newtest).toEqual(shapeData1);
    });
  });
});

describe('testingShape', () => {
    describe('triangleShape', () => {
      it('have a triangle shape if the given shape parameter is triangle', () => {
      const shapeData1 = '<triangle cx="150" cy="100" r="80" fill="green" />';
      const newtest = new shapeTest('triangle','green');
        expect(newtest).toEqual(shapeData1);
      });
    });
  });

describe('testingShape', () => {
    describe('squareShape', () => {
      it('have a square shape if the given shape parameter is square', () => {
      const shapeData1 = '<square cx="150" cy="100" r="80" fill="green" />';
      const newtest = new shapeTest('square','green');
        expect(newtest).toEqual(shapeData1);
      });
    });
  });