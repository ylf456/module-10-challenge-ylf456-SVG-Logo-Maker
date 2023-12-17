class SVGshape {
    constructor(shape, color) {
        if (shape === null || shape === undefined) { this.shape = "circle" };
        if (color === null || color === undefined) { this.color = "blue" };
        this.shape = shape;
        this.color = color;
        this.makeShape = function () {
            let shapeType = shape;
            let shapeTemplate;
            //console.log(shapeTemplate);
            switch (shapeType) {
                case 'circle':
                   shapeTemplate = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
                  break;
                case 'square':
                   shapeTemplate = `<rect x="10" y="10" width="300" height="300" fill="${this.color}" />`;
                  break;
                case 'triangle':
                   shapeTemplate = `<polygon points="150 15, 300 150, 0 150" fill="${this.color}" />`;
                  break;
                default:
                  console.log('check the shape inut');
              }
              console.log(shapeTemplate)
            return shapeTemplate;
        }
    }
}

module.exports = SVGshape;

/*  below for reference use
   document methods belongs to web api, not available in node.js environment
 
    const textData = document.createElement("text")
    textData.textContent = text;
    textData.setAttribute("x", "150");
    textData.setAttribute("y","125");
    textData.setAttribute("font-size","60");
    textData.setAttribute("text-anchor","middle");
    textData.setAttribute("fill",`${color}`);
    */