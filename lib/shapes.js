//one thing all shapes have in common is that they will have a color set to them
class Shape {
    constructor(shapeColor) {
        this.shapeColor = ''
    }
    setColor(shapeColor) {
        this.shapeColor = (shapeColor);
    }
}

//start defining the different shapes (circle,square,triangle)

class Circle extends Shape {
    //have to include the following functions to allow the text to be centered
    getXPosition(){
        return 135;
    }
    getYPosition(){
        return 90;
    }

    render() {
        //returning dimensions for a circle gethered from the documentation
        //cx -> the x position of the center , cy -> the y position of the center , r -> the radius
        return `<circle cx="175" cy="75" r="60" stroke="black" fill="${this.shapeColor}"></circle>`
    }
}

class Square extends Shape {
    getXPosition(){
        return 100;
    }
    getYPosition(){
        return 100;
    }
    render() {
        //returning the dimensions of a square gathered from the documentation
        //x -> the x position of the top left corner , y -> the y position of the top left corner, width -> the width of the rectangle , height -> the height of the rectangle 
        return `<rect x="70" y="10" width="150" height="150" stroke="black" fill="${this.shapeColor}"></rect>`
    }
}

class Triangle extends Shape {
    //finding the three meridians to find the center
    getXPosition(){
        return 160;
    }
    getYPosition(){
        return 140;
    }
    render() {
        //returning the dimensions of a triangle
        //using points that are x,y coordinates on the screen 
        return `<polygon points="200,10 300,190 100,190" stroke="black" fill="${this.shapeColor}"></polygon>`
    }
};

module.exports = {Circle,Square,Triangle};