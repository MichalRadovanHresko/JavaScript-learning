class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move'); 
    }
}

class Circle extends Shape { 
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    move() {
        // super.move();
        console.log('Circle moved');
    }
}

const c = new Circle('blue', 25);
console.log(c);
c.move();