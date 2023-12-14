const shapeTest = require('./shape');

describe('testingShape', () => {
  describe('circleShape', () => {
    it('have a round shape if the given shape parameter is circle', () => {
      
      /* 
       let _shapeEl = document.createElement('circle');  
       _shapeEl.setAttribute("cx","150");
       _shapeEl.setAttribute("cy","100");
       _shapeEl.setAttribute("r","80");
       _shapeEl.setAttribute("fill",'green');
      */
      let _shapeEl = `<circle cx="150" cy="100" r="80" fill="green" />`;
      const newtest = new shapeTest('circle', 'green');
      expect(newtest.makeShape()).toEqual(_shapeEl);
    });
  });
});

describe('testingShape', () => {
  describe('triangleShape', () => {
    it('have a triangle shape if the given shape parameter is triangle', () => {
    /*
      let _shapeEl = document.createElement('triangle');
      _shapeEl.setAttribute("cx", "150");
      _shapeEl.setAttribute("cy", "100");
      _shapeEl.setAttribute("r", "80");
      _shapeEl.setAttribute("fill", 'green');
    */
      let _shapeEl = `<triangle cx="150" cy="100" r="80" fill="green" />`;
      const newtest = new shapeTest('triangle', 'green');
      expect(newtest.makeShape()).toEqual(_shapeEl);
    });
  });
});

describe('testingShape', () => {
  describe('squareShape', () => {
    it('have a square shape if the given shape parameter is square', () => {
    /*
      let _shapeEl = document.createElement('square');
      _shapeEl.setAttribute("cx", "150");
      _shapeEl.setAttribute("cy", "100");
      _shapeEl.setAttribute("r", "80");
      _shapeEl.setAttribute("fill", 'green');
    */
      let _shapeEl = `<square cx="150" cy="100" r="80" fill="green" />`;
      const newtest = new shapeTest('square', 'green');
      expect(newtest.makeShape()).toEqual(_shapeEl);
    });
  });
});
