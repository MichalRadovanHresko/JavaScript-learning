// Before this Circle.prototype.constructor = Circle; 
// Circle.prototype = Object.create(Object.prototype) // ObjectBase
// Circle.prototype = Object.create(Shape.prototype); // Now Circle inherits from ShapeBase
// Whenever we reset a prototype of an object we should also reset the constructor 
// Circle.prototype.constructor = Circle;

function extend(Child, Parent) { // parameters are expected to be constructor functions
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// 1. Define parent constructor
function Shape(color) {
    this.color = color;
}

// 2. Add methods to parent prototype
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// 3. Define child constructor
function Circle(radius, color) {
    Shape.call(this, color); // Call parent constructor
    this.radius = radius;
}

// 4. Establish inheritance
extend(Circle, Shape);

// 5. Add methods specific to child
Circle.prototype.draw = function() {
    console.log('draw');
}

// Another child class
function Square(size, color) {
    Shape.call(this, color);
    this.size = size;
}

extend(Square, Shape);

// Test instances
const s = new Shape('blue');
const c = new Circle(1, 'red');
const sq = new Square(10, 'green');

// Call methods
sq.duplicate(); // inherited from Shape
c.draw(); // specific to Circle
c.duplicate(); // inherited from Shape