function Circle(radius) {
    // Instance members
    this.radius = radius;
    this.move = function() { 
        console.log('We can easily acces instance method in Prototype');
        // Same with prototype 
        // this.draw();     
    }
}

const c1 = new Circle(1);
const c2 = new Circle(1); // We dont have to define it first 

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

Circle.prototype.toString = function() {
    this.move();
    console.log('The radius is ' + this.radius);
}

c1.draw();
c1.toString();

// Returns instane members 
console.log(Object.keys(c1));

// Returns all members (instace + prototypes)
for (let key in c1) console.log(key);
console.log(c1.hasOwnProperty('draw'));

// DONT MODIFY THE OBJECTS YOU DONT OWN!