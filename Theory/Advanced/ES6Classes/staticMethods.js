class Circle { 
    constructor (radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
    }

    // Static Method => to call static method we dont have to have instance of a class 
    // We use Static methods to create utility functions that are not tied to particular Object 
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
 }

 const circle = Circle.parse('{"radius": 1}');
 console.log(circle); 