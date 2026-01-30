'use strict';
const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
}

const c = new Circle();

// Method Call
c.draw(); // This => point to the THAT Object

const draw = c.draw;

// Function Call 
draw(); // This => point to the global Object

// In JavaScript we have STRICT mode => JavaScript will be more sensitive it will do more error checking it will change behaviour of this keyword
// We can enable strict mode 'use strict';