// Factory functions

const createCircle = radius => {
    return {
        radius,         // same as radius: radius
        draw() {        // originally it was draw: function () {} but this is shorter 
            console.log('draw');
        }
    };
};

const circle1 = createCircle(1);
console.log(circle1);