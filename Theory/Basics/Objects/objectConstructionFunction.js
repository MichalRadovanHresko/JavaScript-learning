// Constructor function
// ! When naming constructor functions we use Pascal Notation (OneTwoThreeFour) 


function Circle(radius) { 
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
};

const circle = new Circle(1);
