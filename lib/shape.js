SVGshape = (shape,color) => {
    if (shape === null || shape === undefined) {shape = "circle"};
    if (color === null || color === undefined) {color = "blue"};
    const makeShape = document.createElement(`${shape}`);  
    makeShape.setAttribute("x","150");
    makeShape.setAttribute("y","125");
    makeShape.setAttribute("r","80");
    makeShape.setAttribute("fill",`${color}`);
    return makeShape;
}
module.export = SVGshape;

/*
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                                 
        <${shape} cx="150" cy="100" r="80" fill="${shapecolor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
      
    </svg>`
*/