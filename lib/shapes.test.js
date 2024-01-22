const {Circle, Square, Triangle} = require("./shapes.js");

//running test situations for a circle, square and a triangle

describe('Circle', () => {
    it('should render a circle with the proper color and dimensions', () => {
        const circle = new Circle();
        var color = ('red');
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx="175" cy="75" r="60" stroke="black" fill="${color}"></circle>`);
    });
});

describe('Square', () => {
    it('should render a square with the proper color and dimensions', () => {
        const square = new Square();
        var color = ('red');
        square.setColor(color);
        expect(square.render()).toEqual(`<rect x="70" y="10" width="150" height="150" stroke="black" fill="${color}"></rect>`);
    });
});

describe('Triangle', () => {
    it('should render a triangle with the proper color and dimensions', () => {
        const triangle = new Triangle();
        var color = ('red');
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon points="200,10 300,190 100,190" stroke="black" fill="${color}"></polygon>`);
    });
});

