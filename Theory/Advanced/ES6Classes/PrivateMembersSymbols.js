// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
// }

// const c = new Circle(1);


// Lets imagine we want this radius property private
// We want to hide details from outside 
// Some dev use _ before naming we would do it like this its more like convention than actual solution
// this._radius = radius; => but this is terrible (dont use it) => we can still access it from outside 

// In ES6 we have new primitive type => SYMBOL 
// We can directly access this property in code
// We can use Symbols as a simple way to use kinda private properties and methods
const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
        
    }
}

const c = new Circle(1);