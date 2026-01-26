function Shape() {

}
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}
Circle.prototype.draw = function() {
    console.log('draw');
}

// Circle.prototype = Object.create(Object.prototype) // ObjectBase
Circle.prototype = Object.create(Shape.prototype); // Now Circle inherits from ShapeBase

function Circle(radius) {
    this.radius = radius;
}

const s = new Shape();
const c = new Circle(1);
c.draw();