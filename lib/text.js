SVGtext =(text, color)=> {
    if (text === null || text === undefined) {text = "SVG"};
    if (color === null || color === undefined) {color = "black"}
    
    let textData = `<text x="150" y="115" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    return textData;

    // document methods is web api, not available in node.js environment
    /*
    const textData = document.createElement("text")
    textData.textContent = text;
    textData.setAttribute("x", "150");
    textData.setAttribute("y","125");
    textData.setAttribute("font-size","60");
    textData.setAttribute("text-anchor","middle");
    textData.setAttribute("fill",`${color}`);
    */
    
}

module.exports = SVGtext;
