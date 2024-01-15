//brigning in inquirer and the shape attributes
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

//list of questions 
const questions =
    inquirer
        .prompt([
            {
                type: "input",
                name: "characters",
                message: "Enter a MAX of three characters:",
            },
            {
                type: "input",
                name: "characterColor",
                message: "Enter a color or a #hexadecimal number to choose your text color:",
            },
            {
                type: "list",
                name: "shape",
                message: "Choose one of three different shapes provided:",
                choices: ["Circle", "Square", "Triangle"],
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Enter a color or a #hexadecimal number to choose your shape color:"
            }
        ]);

//setting the SVG constructor 
class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    textInput(text, color) {
        //setting up SVG texts from documents(included a tspan element, can only be used within text elements)
        this.text = `<text x="10" y="10" text-anchor = "middle" fill = "${color}"> <tspan font-weight = "bold">${text}</tspan> </text>`
    }
}