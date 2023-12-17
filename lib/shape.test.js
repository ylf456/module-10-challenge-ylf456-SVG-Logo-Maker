const shapeTest = require('./shape');

describe('testingShape', () => {
  describe('circleShape', () => {
    it('have a round shape if the given shape parameter is circle', () => {
      let _shapeEl = `<circle cx="150" cy="100" r="80" fill="green" />`;
      const newtest = new shapeTest('circle', 'green');
      expect(newtest.makeShape()).toEqual(_shapeEl);
    });
  });
});

describe('testingShape', () => {
  describe('triangleShape', () => {
    it('have a triangle shape if the given shape parameter is triangle', () => {
      let _shapeEl = `<polygon points="150 15, 300 150, 0 150" fill="green" />`;
      const newtest = new shapeTest('triangle', 'green');
      expect(newtest.makeShape()).toEqual(_shapeEl);
    });
  });
});

describe('testingShape', () => {
  describe('squareShape', () => {
    it('have a square shape if the given shape parameter is square', () => {

      let _shapeEl = `<rect x="10" y="10" width="300" height="300" fill="green" />`;
      const newtest = new shapeTest('square', 'green');
      expect(newtest.makeShape()).toEqual(_shapeEl);
    });
  });
});

    /*  
    below for reference, document. methods are available when JS is supported by browser and WEB api.
      let _shapeEl = document.createElement('square');
      _shapeEl.setAttribute("cx", "150");
      _shapeEl.setAttribute("cy", "100");
      _shapeEl.setAttribute("r", "80");
      _shapeEl.setAttribute("fill", 'green');
    */