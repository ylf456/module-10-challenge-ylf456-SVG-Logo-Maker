const shapeFunc = require("./shape.js")
const textFunc = require("./text.js")


SVGconstructor = (shape, shapeColor, text, textColor) => {
    const newShape = new shapeFunc(shape, shapeColor);

    let SVGel = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    

    ${newShape.makeShape()}

    ${textFunc(text, textColor)}
      
</svg>`;
    return SVGel;

    // document methods is web api, not available in node.js environment
    /*
        let SVGel = document.createElement('svg');
        SVGel.setAttribute("version","1.1");
        SVGel.setAttribute("width","300");
        SVGel.setAttribute("height","200");
        SVGel.setAttribute("xmlns","http://www.w3.org/2000/svg");
    
        SVGel.append(shapeFunc(shape,shapeColor));
        SVGel.append(textFunc(text,textColor));
        return SVGel;
    */
}
module.exports = SVGconstructor;

