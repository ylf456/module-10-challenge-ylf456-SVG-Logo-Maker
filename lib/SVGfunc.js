const shapeFunc = require("./shape.js")
const textFunc = require("./text.js")

SVGbackgroundColor = (shape,shapeColor,text,textColor) => {
    const SVGel = document.createElement("svg");
    SVGel.setAttribute("version","1.1");
    SVGel.setAttribute("width","300");
    SVGel.setAttribute("height","200");
    SVGel.setAttribute("xmlns","http://www.w3.org/2000/svg");

    SVGel.append(shapeFunc(shape,shapeColor));
    SVGel.append(textFunc(text,textColor));
    return SVGel;
}
module.export = SVGBackgroundColor;

/*
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                                 
        <${shape} cx="150" cy="100" r="80" fill="${shapecolor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
      
    </svg>`
*/