const numbers = [1, -2, 4, 5 ,7];

// let sum = 0;
// for (let n of numbers)
//     sum += n;


// There is a better elegant way to do it !

// Let see what happened here
// acccumulator = 0, the first value from array currentValue = 1 => 0 + 1 = 1 and 1 will be set after callback function 
// Then again accumulator = 1; currentValue = -2 => accumulator = -1
// accumulator = -1; currentValue = 4 => accumulator = 3 etc until the end 

// const sum = numbers.reduce((accumulator, currentValue) => { // First value is a callback function, second one is an initial value
//     return accumulator + currentValue;
// }, 0); // We can exclude 0 and then the initial value will be set to 1 (first value from our array)

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);


console.log(sum);
