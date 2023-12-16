class SVGshape {
    constructor(shape, color) {
        if (shape === null || shape === undefined) { this.shape = "circle" };
        if (color === null || color === undefined) { this.color = "blue" };
        this.shape = shape;
        this.color = color
        this.makeShape = function () {
            let shapeTemplate = `<${this.shape} cx="150" cy="100" r="80" fill="${this.color}" />`;
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