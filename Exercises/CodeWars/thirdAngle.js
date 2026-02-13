// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    if (a<0 || b<0)
        throw new Error('Please enter valid value');
    return 180-(a+b);
}