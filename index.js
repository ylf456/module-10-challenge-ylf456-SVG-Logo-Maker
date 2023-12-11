const fs = require("fs");
const inquirer = require("inquirer");
const color = require("./lib/color");
const text = require("./lib/text");
const shape = require("./lib/shape");

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

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        console.log(fileName);
        console.log(data);
        // call functions in 3 lib 
        // shape shapeColor text color
        const SVGfile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                                 
        <${} cx="150" cy="100" r="80" fill="${}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${}">SVG</text>
      
      </svg>`;
        fs.writeFile(fileName, README, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!'));
    }
}

function init() { prompting() };

init();
