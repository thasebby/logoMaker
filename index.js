//brigning in inquirer, fs and the shape attributes
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

//list of questions 
const questions =
    [
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
    ];

//setting the SVG constructor 
class SVG {
    constructor() {
        this.shape = '';
        this.text = '';
    }

    textInput(text, color,shape) {
        //can't statically set the texts x and y element. You have to take into account where the shape is being rendered
        const x = shape.getXPosition();
        const y = shape.getYPosition();
        
        this.text = `<text x="${x}" y="${y}" fill="${color}" font-size="50">${text}</text>`
    }

    //this function is creating the shape. It will input the information that has been hardcoded in the shapes.js file
    shapeInput(shape) {
        this.shape = shape.render();
    }

    //we use the render function to generate and present visual content. In this instance we are using it to display on a web page and save it on to a file
    render() {
        //creating xml file that can be opened in a browser with the information that has been gathered with inquirer
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}


//creating an asynchronous function that till collect all the information that has been gatherd through inquirer
async function start() {
    let SVGtext = '';
    const SVGfile = 'logo.svg';

    //waiting for the user input
    const answers = await inquirer.prompt(questions);

    //making sure the users text input is less than 3
    var characterInput = '';
    if (answers.characters.length <= 3 && answers.characters.length >= 1) {
        characterInput = answers.characters;
    }
    else {
        console.log("Too many characters!");
        return;
    }
    //getting the color of the characters
    var characterColor = answers.characterColor;
    //getting the shape 
    var shape = answers.shape;
    //getting the shape color
    var shapeColor = answers.shapeColor;

    //Checking what shape is chosen and creating a new instance of that shape
    if (shape === 'Circle') {
        shape = new Circle();
    }
    else if (shape === 'Square') {
        shape = new Square();
    }
    else if (shape === "Triangle") {
        shape = new Triangle();
    }
    shape.setColor(shapeColor);

    //creating a new instance of an SVG file
    const svg = new SVG();
    svg.shapeInput(shape);
    svg.textInput(characterInput, characterColor,shape);
    //again using the render function to create a new instance of an SVG file
    SVGtext = svg.render();

    //writing all the information into the new logo.svg file
    writeToFile(SVGfile, SVGtext);

}

//function that is writing the information into the 'logo.svg' file
function writeToFile(file, input) {
    fs.writeFile(file, input, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Generated logo.svg");
    })
}
start();