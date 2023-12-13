const fs = require("fs");
const inquirer = require("inquirer");
const SVGfunc = require("./lib/SVGfunc.js")

// if text entry = null || undefined, give a default choice of shape or color
prompting = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter the text on you want on the logo. Please enter at most three characters. example: "SVG"',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter the color you want for your text. You can enter a color name or the corresponding hexadecimal color code. example: "black" or "000000"',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape you want from the following list',
                choices: ["circle", "triangle", "square"],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter the color you want for the background. You can enter a color name or the corresponding color code. example: "blue" , "33508F"',
            },
        ])
        .then((answers) => {
            console.log(answers);
            writeToFile("Generated_logo.svg", answers)
        })
}

function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    const SVGlogo = SVGfunc(data.text, data.textColor, data.shape, data.shapeColor);

    fs.writeFile(fileName, SVGlogo, (err) =>
        err ? console.log(err) : console.log('Successfully created a SVGlogo!'));
}

function init() { prompting() };

init();
