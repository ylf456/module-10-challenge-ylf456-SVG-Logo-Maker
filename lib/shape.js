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

        /*
        const makeShape = document.createElement(`${shape}`);  
        makeShape.setAttribute("cx","150");
        makeShape.setAttribute("cy","100");
        makeShape.setAttribute("r","80");
        makeShape.setAttribute("fill",`${color}`);
        return makeShape;
        */
    }

}

module.exports = SVGshape;

/*
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                                 
        <${shape} cx="150" cy="100" r="80" fill="${shapecolor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
      
    </svg>`
*/