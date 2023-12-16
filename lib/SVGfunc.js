const shapeFunc = require("./shape.js")
const textFunc = require("./text.js")

SVGconstructor = (shape, shapeColor, text, textColor) => {
    const newShape = new shapeFunc(shape, shapeColor);

    let SVGel = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    

    ${newShape.makeShape()}

    ${textFunc(text, textColor)}
      
</svg>`;
    return SVGel;
}
module.exports = SVGconstructor;

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