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
    render() {
        //returning dimensions for a circle gethered from the documentation
        //cx -> the x position of the center , cy -> the y position of the center , r -> the radius
        return `<circle cx = "25" cy = "75" r = "20" stroke = "black" fill = "${this.shapeColor}">`
    }
}

class Square extends Shape {
    render() {
        //returning the dimensions of a square gathered from the documentation
        //x -> the x position of the top left corner , y -> the y position of the top left corner, width -> the width of the rectangle , height -> the height of the rectangle 
        return `<rect x = "10" y = "10" width = "30" height = "30" stroke = "black" fill = "${this.shapeColor}">`
    }
}

class Triangle extends Shape {
    render() {
        //returning the dimensions of a triangle
        //using points that are x,y coordinates on the screen 
        return `<polygon points = "200,10 300,190 100,190" stroke = "black" fill = "${this.shapeColor}">`
    }
};

module.exports = {Circle,Square,Triangle}