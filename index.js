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
                //add conditions to restart this prompt question if they entered four characters or more
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter the color you want for your text. You can enter a color name or the corresponding hexadecimal color code. example: "black" or "000000"',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape you want from the list. Below are some predined shapes',
                choices: ["circle", "triangle", "square"],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter the color you want for the background. You can enter a color name or the corresponding color code. example: "blue" , "33508F"',
            },
            {
                type: 'input',
                name: 'userFileName',
                message: 'Please input a name for your file. Your filename will be `[your input].svg`. \nOtherwise, the default file name will be `Generated_logo.svg` if you skip this step by pressing enter',
            },
        ])
        .then((answers) => {
            console.log(answers);
            let fileName = `${answers.userFileName}.svg`;
            if (fileName === '.svg') { fileName = "Generated_logo.svg" };
            writeToFile(fileName, answers);
        })
}

function writeToFile(fileName, data) {
    console.log("filename: " + fileName);
    const SVGlogo = SVGfunc(data.shape, data.shapeColor, data.text, data.textColor);

    fs.writeFile(fileName, SVGlogo, (err) =>
        err ? console.log(err) : console.log('Successfully created a SVGlogo!'));
}

function init() { prompting() };

init();
