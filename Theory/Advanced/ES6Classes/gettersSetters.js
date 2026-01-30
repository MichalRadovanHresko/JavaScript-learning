const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log('move', this);
        })                            
    }
    // getRadius () {
    //     return _radius.get(this);
    // }
    get radius() {
        return _radius.get(this);
    }
    set radius(value) {
        if (value<=0) throw new Error('invalid radius');
        _radius.set(this, value);
    }
}

const c = new Circle(1);