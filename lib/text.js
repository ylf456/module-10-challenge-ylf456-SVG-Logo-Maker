SVGtext =(text, color)=> {
    if (text === null || text === undefined) {text = "SVG"};
    if (color === null || color === undefined) {color = "black"}
    const textData = document.createElement("text")
    textData.textContent = text;
    textData.setAttribute("x", "150");
    textData.setAttribute("y","125");
    textData.setAttribute("font-size","60");
    textData.setAttribute("text-anchor","middle");
    textData.setAttribute("fill",`${color}`);
    return textData;
}

module.export = SVGtext;

/*
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                                 
        <${shape} cx="150" cy="100" r="80" fill="${shapecolor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
      
    </svg>`
*/