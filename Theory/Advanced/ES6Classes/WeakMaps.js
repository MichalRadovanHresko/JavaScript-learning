const _radius = new WeakMap(); // Later with modules we can hide it and export only code bellow 
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log('move', this); // this is undefined if we use normal function
        })                             // With Arrow function we can inherit this from constructor 
    }

    draw() {
        _move.get(this)();
        console.log('draw');    
    }
}

const c = new Circle(1);